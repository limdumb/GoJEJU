import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosResponse } from "axios";
import { baseInstance } from "../instance";

interface LoginPropsType {
  email: string;
  password: string;
}

export interface AuthResponseType {
  accessToken: string;
  refreshToken: string;
  userId: number;
  userType: "user" | "owner";
}

export default async function loginLogic(props: LoginPropsType) {
  const request = { email: props.email, password: props.password };
  try {
    const response: AxiosResponse<AuthResponseType> = await baseInstance.post(
      "/api/user/signin",
      request
    );
    await AsyncStorage.setItem("userId", `${response.data.userId}`);
    await AsyncStorage.setItem("userType", response.data.userType);
    await AsyncStorage.setItem("accessToken", response.data.accessToken);

    return response.status
  } catch (err) {
    console.error(err);
  }
}
