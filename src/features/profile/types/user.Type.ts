export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
  cpf: string;
}