import { AuthData, User } from "@/features/auth/types/authType";
import { getAuth, removeAuth, saveAuth } from "@/storage/auth/auth.storage";
import { create } from "zustand";



interface AuthStore {
  user: User | null;
  token: string | null;

  loading: boolean;
  authenticated: boolean;

  signIn: (data: AuthData) => Promise<void>;

  signOut: () => Promise<void>;

  loadUserStorage: () => Promise<void>;
}

export const useAuthStore =
  create<AuthStore>((set) => ({
    user: null,
    token: null,

    loading: true,
    authenticated: false,

    async signIn(data) {
      await saveAuth(data);

      set({
        user: data.user,
        token: data.token,
        authenticated: true,
      });
    },

    async signOut() {
      await removeAuth();

      set({
        user: null,
        token: null,
        authenticated: false,
      });
    },

    async loadUserStorage() {
      try {
        const auth = await getAuth();

        if (auth) {
          set({
            user: auth.user,
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