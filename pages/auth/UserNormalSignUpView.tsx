import { useState } from "react";
import { View, StyleSheet } from "react-native";
import userSignup from "../../API/auth/userSignup";
import AuthButton from "../../components/Auth/AuthButton";
import AuthLogo from "../../components/Auth/AuthLogo";
import CommonInput from "../../components/CommonInput";

export default function UserNormalSignUpView() {
  const [emailId, setEmailId] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const registerUser = () => {
    const signupResult = userSignup({
      email: emailId,
      password: passwordValue,
    });
    // 추후 Login Logic 추가 예정
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
