import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthResponseType } from "./loginLogic";

interface OwnerSignupProps {
  email: string;
  password: string;
  LEICode: string;
}

export default async function ownerSignup(props: OwnerSignupProps) {
  const response: AuthResponseType = {
    accessToken: "berer",
    refreshToken: "berer",
    userId: 2,
    userType: "owner",
  };
  try {
    // 추후 로그인로직 추가 예정
  } catch (err) {
    console.error(err);
  }
  return response;
}
