import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AuthBox from "../../components/AuthBox";
import AuthLogo from "../../components/AuthLogo";
import CustomText from "../../components/CustomText";
import { SignUpScreenNavigationProps } from "./SignUpView";

interface SignupType {
  type: "kakao" | "google" | "normer";
}

export default function UserSignUpView({ route }: any) {
  const navigate = useNavigation<SignUpScreenNavigationProps>();
  const signupType: SignupType[] = [
    { type: "kakao" },
    { type: "google" },
    { type: "normer" },
  ];
  return (
    <View style={styles.container}>
      <AuthLogo />
      <View style={styles.loginSelectSection}>
        {signupType.map((el) => {
          return (
            <AuthBox
              type={"회원가입"}
              key={el.type}
              platform={el.type}
              role={"일반 사용자"}
              navigate={navigate}
            />
          );
        })}
      </View>
      <View style={styles.idCheckTextContainer}>
        <CustomText children="이미 계정이 있으신가요?" marginRgt="3px" />
        <TouchableOpacity onPress={() => navigate.navigate("LoginView")}>
          <CustomText children="여기를 클릭하세요!" />
        </TouchableOpacity>
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
  loginSelectSection: {
    height: 280,
    width: "86%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  idCheckTextContainer: { flexDirection: "row", marginTop: 20 },
});
