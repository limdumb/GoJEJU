import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserSignupProps {
  email: string;
  password: string;
}

interface UserSignupResponseType {
  accessToken: string;
  refreshToken: string;
  userId: number;
  userType: "user";
}

export default async function userSignup(
  props: UserSignupProps
): Promise<UserSignupResponseType> {
  const response: UserSignupResponseType = {
    accessToken: "berer",
    refreshToken: "berer",
    userId: 2,
    userType: "user",
  };
  try {
    await AsyncStorage.setItem("userId", `${response.userId}`);
  } catch (err) {
    console.error(err);
  }
  return response;
}
