import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { View, StyleSheet } from "react-native";
import loginLogic from "../../API/auth/loginLogic";
import userSignup from "../../API/auth/userSignup";
import { RootStackParamList } from "../../App";
import AuthButton from "../../components/Auth/AuthButton";
import AuthLogo from "../../components/Auth/AuthLogo";
import CommonInput from "../../components/CommonInput";
import { emailValidation, passwordValidation } from "../../function/validation";

export default function UserNormalSignUpView() {
  const [emailId, setEmailId] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();

  const signupValidate = () => {
    const emailValidateResult = emailValidation(emailId);
    const passwordValidateResult = passwordValidation(passwordValue);
    return emailValidateResult && passwordValidateResult ? true : false;
  };

  const registerUser = async () => {
    setIsLoading(true);
    const signupResult = await userSignup({
      email: emailId,
      password: passwordValue,
    });
    setIsLoading(false);

    if (signupResult && !isLoading) {
      const signin = await loginLogic({
        email: emailId,
        password: passwordValue,
      });
      if (signin === 200) {
        Alert.alert("로그인이 완료되었습니다");
        navigate.navigate("MainView");
      } else {
        Alert.alert("정보가 잘못돼었습니다 다시 시도해주세요");
      }
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
            value={emailId}
            backgroundColor={"#EEEEEE"}
            placeholder={"이메일을 입력해 주세요"}
            changeFunc={setEmailId}
            label={"이메일"}
            type={"text"}
          />
        </View>
        <View style={styles.passwordContainer}>
          <CommonInput
            width={"100%"}
            height={"54px"}
            value={passwordValue}
            backgroundColor={"#EEEEEE"}
            placeholder={"비밀번호를 입력해 주세요"}
            changeFunc={setPasswordValue}
            label={"비밀번호"}
            type={"password"}
          />
        </View>
        <View>
          <AuthButton
            children="회원가입 완료"
            pressFunction={() => {
              const validateResult = signupValidate();
              if (validateResult) {
                registerUser();
              } else {
                Alert.alert("로그인 정보를 다시 확인해주세요");
              }
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
