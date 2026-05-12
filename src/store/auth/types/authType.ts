import { User } from "@/features/user/types/userTypes";

type AuthState = {
  token: string | null;
  user: User | null;

  signIn: () => void;
  signOut: () => void;

  isAuthenticated: boolean;
}