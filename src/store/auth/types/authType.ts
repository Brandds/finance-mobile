import { User } from "@/features/auth/types/authType";

type AuthState = {
  token: string | null;
  user: User | null;

  signIn: () => void;
  signOut: () => void;

  isAuthenticated: boolean;
}