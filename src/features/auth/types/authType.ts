import { Role, User } from "@/features/profile/types/user.Type";

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  role: Role;
  cpf: string;
}

export interface AuthData {
  token: string;
  user: UserResponse;
}