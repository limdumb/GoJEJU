import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AuthBox from "../../components/AuthBox";
import AuthLogo from "../../components/AuthLogo";
import CustomText from "../../components/CustomText";
import roleNavigateAdress from "../../function/roleNavigateAdress";
import { SignUpScreenNavigationProps } from "./SignUpView";

interface SignupType {
  type: "kakao" | "google" | "normer";
  navigate: "UserNormalSignUpView" | "OwnerNormalSignUpView";
}

// 사용자인지 점주사용자인지 구분
// 점주 사용자이고 Oauth 로그인을 한 경우 회원가입 후 사업자 등록 해야함
// 점주 사용자이고 일반 회원가입을 한 경우 동일하게 임에리 비밀번호 사업자 등록번호 순
// 일반 사용자는 기존 Navigate

export default function UserSignUpView({ route }: any) {
  const navigate = useNavigation<SignUpScreenNavigationProps>();
  const signupType: SignupType[] = [
    // Oauth Navigate Url은 추후 추가 예정
    { type: "kakao", navigate: roleNavigateAdress(route.params.role) },
    { type: "google", navigate: roleNavigateAdress(route.params.role) },
    { type: "normer", navigate: roleNavigateAdress(route.params.role) },
  ];

  return (
    <View style={styles.container}>
      <AuthLogo />
      <View style={styles.loginSelectSection}>
        {signupType.map((el) => {
          return (
            <TouchableOpacity
              style={styles.authContainer}
              onPress={() => {
                navigate.navigate(el.navigate, { role: route.params.role });
              }}
            >
              <AuthBox
                type={"회원가입"}
                key={el.type}
                platform={el.type}
                role={"일반 사용자"}
              />
            </TouchableOpacity>
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
  authContainer: { width: "90%" },
});
