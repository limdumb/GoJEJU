import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../App";
import AuthBox from "../../components/Auth/AuthBox";
import AuthLogo from "../../components/Auth/AuthLogo";
import CustomText from "../../components/CustomText";
import roleNavigateAdress from "../../function/roleNavigateAdress";
import { SignUpScreenNavigationProps } from "./SignUpView";

interface SignupType {
  type: "kakao" | "google" | "normer";
  navigate: "UserNormalSignUpView" | "OwnerNormalSignUpView";
}

type RouteType = NativeStackScreenProps<RootStackParamList, "UserSignUpView">;

export default function UserSignUpView({ route }: RouteType) {
  const navigate = useNavigation<SignUpScreenNavigationProps>();
  const navigateAdress = roleNavigateAdress(route.params.role);
  const signupType: SignupType[] = [
    // Oauth Navigate Url은 추후 추가 예정
    { type: "kakao", navigate: navigateAdress },
    { type: "google", navigate: navigateAdress },
    { type: "normer", navigate: navigateAdress },
  ];

  return (
    <View style={styles.container}>
      <AuthLogo />
      <View style={styles.loginSelectSection}>
        {signupType.map((el) => {
          return (
            <TouchableOpacity
              key={el.type}
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
