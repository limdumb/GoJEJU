import AsyncStorage from "@react-native-async-storage/async-storage";

interface LoginPropsType {
  email: string;
  password: string;
}

export default async function loginLogic(props: LoginPropsType) {
  const request = { email: props.email, password: props.password };
  try {
    const response = {
      accessToken: "berer",
      refreshToken: "berer",
      userId: 2,
      userType: "user",
    };
    await AsyncStorage.setItem("userId", `${response.userId}`);
  } catch (err) {
    console.error(err);
    // 추후 공동 Error처리 진행 예정
  }
}
