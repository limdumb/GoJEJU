import { useState } from "react";
import { Alert } from "react-native";
import { RootStackParamList } from "../../App";
import { StyleSheet, View } from "react-native";
import loginLogic from "../../API/auth/loginLogic";
import AuthLogo from "../../components/Auth/AuthLogo";
import CommonInput from "../../components/CommonInput";
import AuthButton from "../../components/Auth/AuthButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { emailValidation, passwordValidation } from "../../function/validation";

export default function LoginView() {
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();
  const [emailValue, setEmailValue] = useState("");
  const [password, setPassword] = useState("");

  const loginValidate = () => {
    const emailValidateResult = emailValidation(emailValue);
    const passwordValidateResult = passwordValidation(password);
    return emailValidateResult && passwordValidateResult ? true : false;
  };

  const userLogin = async () => {
    const validateResult = loginValidate();
    const LoginResult = await loginLogic({
      email: emailValue,
      password: password,
    });
    if (!validateResult || LoginResult !== 200) {
      Alert.alert("로그인 정보가 잘못돼었습니다 다시 확인해주세요");
    }
    if (validateResult && LoginResult === 200) {
      Alert.alert("로그인이 완료되었습니다");
      navigate.navigate("MainView");
    }
  };

  return (
    <View style={styles.container}>
      <AuthLogo />
      <View style={styles.authContainer}>
        <View style={styles.emailContainer}>
          <CommonInput
            width="100%"
            height="54px"
            changeFunc={setEmailValue}
            type="text"
            value={emailValue}
            backgroundColor={"#EEEEEE"}
            placeholder={"이메일을 입력해주세요"}
            label={"이메일"}
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
      </View>
      <View style={styles.signupCheck}>
        <AuthButton
          children={"로그인"}
          pressFunction={() => {
            userLogin();
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
  signupCheck: {
    width: "90%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  emailContainer: {
    width: "90%",
    height: 80,
  },
  passwordContainer: { width: "90%", height: 80 },
  authContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    height: "26%",
    padding: 10,
    marginBottom: 10,
  },
});
