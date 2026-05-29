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

  loadUserStorage: () => Promise<void>;
}

export const useAuthStore =
  create<AuthStore>((set) => ({
    userResponse: null,
    token: null,

    loading: true,
    authenticated: false,

    async signIn(data) {
      await saveAuth(data);

      console.log("Sign In Data:", data);
      set({
        userResponse: data.user,
        token: data.token,
        authenticated: true,
      });
    },

    async signOut() {
      await removeAuth();

      set({
        userResponse: null,
        token: null,
        authenticated: false,
      });
    },

    async loadUserStorage() {
      try {
        const auth = await getAuth();

        if (auth) {
          set({
            userResponse: auth.user,
            token: auth.token,
            authenticated: true,
          });
        }
      } finally {
        set({
          loading: false,
        });
      }
    },
  }));