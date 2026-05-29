import { Role, User } from "@/features/user/types/user.Type";

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  role: Role;
}

export interface AuthData {
  token: string;
  user: UserResponse;
}