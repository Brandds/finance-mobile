import { UserResponse } from "../../types/authType";

type LoginRequest = {
  email: string;
  password: string;
};

type LoginResponse = {
  token:string;
  user: UserResponse;
}



export { LoginRequest, LoginResponse};