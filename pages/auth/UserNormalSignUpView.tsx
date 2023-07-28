import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { RootStackParamList } from "../../App";
import loginLogic from "../../API/auth/loginLogic";
import userSignup from "../../API/auth/userSignup";
import AuthLogo from "../../components/Auth/AuthLogo";
import CommonInput from "../../components/CommonInput";
import AuthButton from "../../components/Auth/AuthButton";
import { authValueLengthChecked } from "../../function/validation";

export default function UserNormalSignUpView() {
  const [emailValue, setEmailValue] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();

  const registerUser = async () => {
    const lengthResult = authValueLengthChecked(emailValue, password);
    if (lengthResult) {
      const signupResult = await userSignup({
        email: emailValue,
        password: password,
      });
      if (signupResult === 200) {
        const signin = await loginLogic({
          email: emailValue,
          password: password,
        });
        if (signin === 200) {
          Alert.alert("회원가입이 완료되었습니다");
          navigate.navigate("MainView");
        } else {
          Alert.alert("정보가 잘못돼었습니다 다시 시도해주세요");
        }
      }
    } else {
      Alert.alert("이메일 및 비밀번호를 입력해주세요");
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
        <View>
          <AuthButton
            children="회원가입 완료"
            pressFunction={() => {
              registerUser();
            }}
          />
        </View>
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
