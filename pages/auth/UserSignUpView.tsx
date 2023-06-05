import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AuthBox from "../../components/AuthBox";
import CustomText from "../../components/CustomText";
import { SignUpScreenNavigationProps } from "./SignUpView";

interface SignupType {
  type: "kakao" | "google" | "normer";
}

export default function UserSignUpView({route}:any) {
  const navigate = useNavigation<SignUpScreenNavigationProps>();
  const signupType: SignupType[] = [
    { type: "kakao" },
    { type: "google" },
    { type: "normer" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.logoSection}>
        <Text style={styles.logo}>Watching</Text>
        <Text style={styles.logo}>☁️ JeJu</Text>
      </View>
      <View style={styles.loginSelectSection}>
        {signupType.map((el) => {
          return <AuthBox type={"회원가입"} key={el.type} platform={el.type} />;
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
  logo: { fontSize: 60, color: "#0F4C81" },
  logoSection: {
    width: "100%",
    height: 360,
    justifyContent: "center",
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
