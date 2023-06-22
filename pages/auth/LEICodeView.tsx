import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { View } from "react-native";
import ownerSignup from "../../API/auth/ownerSignup";
import { RootStackParamList } from "../../App";
import AuthButton from "../../components/Auth/AuthButton";
import AuthLogo from "../../components/Auth/AuthLogo";
import CommonInput from "../../components/CommonInput";
import CustomText from "../../components/CustomText";

type RouteType = NativeStackScreenProps<RootStackParamList, "LEICodeView">;

export default function LEICodeView({ route }: RouteType) {
  const [LEIValue, setLEIValue] = useState("");
  const signUpValue = route.params;

  const onSignup = async() => {
    const response = await ownerSignup({
      email: signUpValue.email,
      password: signUpValue.password,
      LEICode: LEIValue,
    });
    if(response){
      Alert.alert("회원가입이 완료 되었습니다!")
    }
  };
  return (
    <View style={styles.container}>
      <AuthLogo />
      <View style={styles.LEICodeTitle}>
        <CustomText
          children="사업자 등록번호를 입력해주세요!"
          fontSize="24px"
          fontWeight="600"
          marginBtm="20px"
        />
        <CustomText children="입력하신 번호는 가게확인용으로 확인됩니다" />
      </View>
      <View style={styles.inputContainer}>
        <CommonInput
          changeFunc={setLEIValue}
          type={"text"}
          width={"100%"}
          height={"50px"}
          value={LEIValue}
          backgroundColor={"#EEEEEE"}
          placeholder={"숫자만 입력해주세요"}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AuthButton children={"회원가입 완료"} pressFunction={onSignup} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", alignItems: "center" },
  LEICodeTitle: {
    width: "90%",
    height: 70,
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 40,
    width: "90%",
    marginBottom: 55,
  },
  buttonContainer: {
    width: "90%",
    alignItems: "center",
  },
});
