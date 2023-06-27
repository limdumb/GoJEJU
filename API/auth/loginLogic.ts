import AsyncStorage from "@react-native-async-storage/async-storage";

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
    const response:AuthResponseType = {
      accessToken: "berer",
      refreshToken: "berer",
      userId: 2,
      userType: "user",
    };
    await AsyncStorage.setItem("userId", `${response.userId}`);
    await AsyncStorage.setItem("userType", response.userType);
    await AsyncStorage.setItem("accessToken" , response.accessToken)
  } catch (err) {
    console.error(err);
    // 추후 공동 Error처리 진행 예정
  }
}
