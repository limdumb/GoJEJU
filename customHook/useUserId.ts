import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export const useUserId = () => {
  const [userIdValue, setUserIdValue] = useState<number | null>(null);

  useEffect(() => {
    const getUserId = async () => {
      try {
        const response = await AsyncStorage.getItem("userId");
        if (response !== null) {
          setUserIdValue(Number(response));
        }
      } catch (err) {
        console.error(err);
      }
    };

    getUserId();
  }, []);

  return userIdValue;
};