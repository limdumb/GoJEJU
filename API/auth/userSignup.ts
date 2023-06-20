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
    // 추후 회원가입 Post 로직 추가 예정
  } catch (err) {
    console.error(err);
  }
  return response;
}
