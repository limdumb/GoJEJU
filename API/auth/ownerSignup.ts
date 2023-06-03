import AsyncStorage from "@react-native-async-storage/async-storage";

interface OwnerSignupProps {
  email: string;
  password: string;
  LEICode: string;
}

interface OwnerSignupResponseType {
  accessToken: string;
  refreshToken: string;
  userId: number;
  userType: "user" | "owner";
}

export default async function userSignup(
  props: OwnerSignupProps
): Promise<OwnerSignupResponseType> {
  const response: OwnerSignupResponseType = {
    accessToken: "berer",
    refreshToken: "berer",
    userId: 2,
    userType: "owner",
  };
  try {
    await AsyncStorage.setItem("userId", `${response.userId}`);
  } catch (err) {
    console.error(err);
  }
  return response;
}
