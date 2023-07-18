import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { View, StyleSheet } from "react-native";
import AuthButton from "../../components/Auth/AuthButton";
import AuthLogo from "../../components/Auth/AuthLogo";
import CommonInput from "../../components/CommonInput";
import {
  authValueLengthChecked,
  emailValidation,
  passwordValidation,
} from "../../function/validation";
import { type SignUpScreenNavigationProps } from "./SignUpView";

export default function OwnerNormalSignUpView() {
  const navigate = useNavigation<SignUpScreenNavigationProps>();
  const [emailValue, setEmailValue] = useState("");
  const [password, setPassword] = useState("");

  const signupValidate = () => {
    const emailValidateResult = emailValidation(emailValue);
    const passwordValidateResult = passwordValidation(password);
    return emailValidateResult && passwordValidateResult ? true : false;
  };

  const nextNavigat = () => {
    const lengthResult = authValueLengthChecked(emailValue, password);
    const validateResult = signupValidate()
    if (lengthResult){
      if(validateResult){
        navigate.navigate("LEICodeView", {
          email: emailValue,
          password: password,
        });
      } else {
        Alert.alert("아이디와 비밀번호를 확인 해주세요")
      }
    } else {
      Alert.alert("회원가입 정보를 입력 해주세요")
    }
  };

  return (
    <View style={styles.container}>
      <AuthLogo />
      <View style={styles.inputContainer}>
        <View>
          <CommonInput
            width={"100%"}
            height={"54px"}
            value={emailValue}
            backgroundColor={"#EEEEEE"}
            placeholder={"이메일을 입력해 주세요"}
            changeFunc={setEmailValue}
            label={"이메일"}
            type={"text"}
          />
        </View>
        <View style={styles.passwordContainer}>
          <CommonInput
            width={"100%"}
            height={"54px"}
            value={password}
            backgroundColor={"#EEEEEE"}
            placeholder={"비밀번호를 입력해 주세요"}
            changeFunc={setPassword}
            label={"비밀번호"}
            type={"password"}
          />
        </View>
        <AuthButton
          children="다음 단계로"
          pressFunction={() => {
            nextNavigat();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  inputContainer: {
    height: 192,
    width: "90%",
  },
  passwordContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
});
