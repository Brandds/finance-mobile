export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthData {
  token: string;
  user: User;
}