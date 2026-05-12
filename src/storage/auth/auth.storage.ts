import { AuthData } from "@/features/auth/types/authType";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_STORAGE_KEY = "@finance:user";

export async function saveAuth(
  data: AuthData
) {
  await AsyncStorage.setItem(
    AUTH_STORAGE_KEY,
    JSON.stringify(data)
  );
}

export async function getAuth() {
  const response = await AsyncStorage.getItem(
    AUTH_STORAGE_KEY
  );

  if (!response) {
    return null;
  }

  return JSON.parse(response) as AuthData;
}

export async function removeAuth() {
  await AsyncStorage.removeItem(
    AUTH_STORAGE_KEY
  );
}