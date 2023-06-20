import { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import AuthButton from "../../components/AuthButton";
import AuthLogo from "../../components/AuthLogo";
import CommonInput from "../../components/CommonInput";

export default function LoginView() {
  const [emailValue, setEmailValue] = useState("");
  const [password, setPassword] = useState("");
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
        <AuthButton children={"로그인"} pressFunction={() => {}} />
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
