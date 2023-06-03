import AsyncStorage from "@react-native-async-storage/async-storage";

export const userId = async () => {
  try {
    const userIdValue = await AsyncStorage.getItem("userId");
    if (userIdValue !== null) {
      return userIdValue;
    }
  } catch (err) {
    // 추후 실제 데이터 및 통합시 Error처리 예정
    console.error(err);
  }
};
