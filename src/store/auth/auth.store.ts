import { AuthData, UserResponse } from "@/features/auth/types/authType";
import { getAuth, removeAuth, saveAuth } from "@/storage/auth/auth.storage";
import { create } from "zustand";

interface AuthStore {
  userResponse: UserResponse | null;
  token: string | null;
  loading: boolean;
  authenticated: boolean;
  signIn: (data: AuthData) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (user: UserResponse) => Promise<void>;
  loadUserStorage: () => Promise<void>;
}

let generation = 0;
let pending: Promise<unknown> = Promise.resolve();
function serialize<T>(operation: () => Promise<T>): Promise<T> {
  const result = pending.then(operation);
  pending = result.catch(() => undefined);
  return result;
}
const anonymous = { userResponse: null, token: null, authenticated: false };

export const useAuthStore = create<AuthStore>((set, get) => ({
  ...anonymous,
  loading: true,

  signIn(data) {
    const version = ++generation;
    return serialize(async () => {
      try {
        await saveAuth(data);
      } catch (error) {
        if (version === generation) set({ ...anonymous, loading: false });
        await removeAuth().catch(() => undefined);
        throw error;
      }
      if (version === generation) {
        set({ userResponse: data.user, token: data.token, authenticated: true, loading: false });
      }
    });
  },

  signOut() {
    ++generation;
    // Stop authenticated requests immediately, even when persistence fails.
    set({ ...anonymous, loading: false });
    return serialize(removeAuth);
  },

  loadUserStorage() {
    const version = generation;
    return serialize(async () => {
      try {
        const auth = await getAuth();
        if (version === generation) {
          set(auth ? { userResponse: auth.user, token: auth.token, authenticated: true } : anonymous);
        }
      } catch {
        if (version === generation) set(anonymous);
      } finally {
        if (version === generation) set({ loading: false });
      }
    });
  },

  updateUser(user) {
    const version = generation;
    return serialize(async () => {
      const { token, authenticated } = get();
      if (version !== generation || !authenticated || !token) return;
      await saveAuth({ token, user });
      if (version === generation) set({ userResponse: user });
    });
  },
}));
