import { AuthData, UserResponse } from "@/features/auth/types/authType";
import { URL_BASE } from "@/constants/url_base_constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const LEGACY_KEY = "@finance:user";
const SESSION_KEY = "@finance:session:v2";
const TOKEN_KEY = "finance.session.token.v2";
let webSession: AuthData | null = null;
let pending: Promise<unknown> = Promise.resolve();

function serialize<T>(operation: () => Promise<T>): Promise<T> {
  const result = pending.then(operation);
  pending = result.catch(() => undefined);
  return result;
}

function validUser(value: unknown): value is UserResponse {
  if (!value || typeof value !== "object") return false;
  const user = value as UserResponse;
  return Number.isInteger(user.id) && typeof user.name === "string"
    && typeof user.email === "string" && typeof user.role === "string"
    && typeof user.cpf === "string";
}

async function clearSession() {
  webSession = null;
  // Invalidate restoration before deleting credentials.
  const results = await Promise.allSettled([
    AsyncStorage.setItem(SESSION_KEY, JSON.stringify({ signedOut: true })),
    AsyncStorage.removeItem(LEGACY_KEY),
    ...(Platform.OS === "web" ? [] : [SecureStore.deleteItemAsync(TOKEN_KEY)]),
  ]);
  const failed = results.find(result => result.status === "rejected");
  if (failed?.status === "rejected") throw failed.reason;
}

async function writeSession(data: AuthData, migrating = false) {
  if (!data.token?.trim() || !validUser(data.user)) throw new Error("Sessão inválida.");
  if (Platform.OS === "web") {
    await clearSession();
    webSession = data;
    return;
  }
  if (!migrating) await AsyncStorage.setItem(SESSION_KEY, JSON.stringify({ signedOut: true }));
  await SecureStore.setItemAsync(TOKEN_KEY, data.token);
  await AsyncStorage.setItem(SESSION_KEY, JSON.stringify({ apiUrl: URL_BASE, user: data.user }));
  await AsyncStorage.removeItem(LEGACY_KEY);
}

export function saveAuth(data: AuthData) {
  return serialize(() => writeSession(data));
}

export function getAuth(): Promise<AuthData | null> {
  return serialize(async () => {
    if (Platform.OS === "web") {
      await AsyncStorage.removeItem(LEGACY_KEY);
      return webSession;
    }
    const stored = await AsyncStorage.getItem(SESSION_KEY);
    if (stored) {
      let session;
      try { session = JSON.parse(stored); } catch { await clearSession(); return null; }
      if (!session || session.signedOut || session.apiUrl !== URL_BASE || !validUser(session.user)) {
        await clearSession();
        return null;
      }
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      if (!token?.trim()) { await clearSession(); return null; }
      await AsyncStorage.removeItem(LEGACY_KEY);
      return { token, user: session.user };
    }
    const legacy = await AsyncStorage.getItem(LEGACY_KEY);
    if (!legacy) return null;
    let auth;
    try { auth = JSON.parse(legacy); } catch { await clearSession(); return null; }
    if (!auth || typeof auth.token !== "string" || !auth.token.trim() || !validUser(auth.user)) {
      await clearSession();
      return null;
    }
    // Legacy sessions have no environment: migration binds them to the configured API.
    await writeSession(auth, true);
    return auth;
  });
}

export function removeAuth() {
  return serialize(clearSession);
}
