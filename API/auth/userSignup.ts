import { AxiosResponse } from "axios";
import { baseInstance } from "../instance";
import { type AuthResponseType } from "./loginLogic";

interface UserSignupProps {
  email: string;
  password: string;
}

export default async function userSignup(props: UserSignupProps) {
  const request = { email: props.email, password: props.password };
  try {
    const response: AxiosResponse<AuthResponseType> = await baseInstance.post(
      "/api/user/signup",
      request
    );
    return response.status;
  } catch (err) {
    console.error(err);
  }
}
