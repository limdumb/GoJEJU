import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../App";
import AuthLogo from "../../components/Auth/AuthLogo";
import CustomText from "../../components/CustomText";
import RolePicker from "../../components/Auth/RolePicker";

export type SignUpScreenNavigationProps = NavigationProp<RootStackParamList>;

export default function SignUpView() {
  const navigate = useNavigation<SignUpScreenNavigationProps>();
  
  return (
    <View style={styles.container}>
      <AuthLogo/>
      <View style={styles.rolePickerContainer}>
        <RolePicker
          type="회원가입"
          role={"일반 사용자"}
          navigate={navigate}
        />
        <RolePicker
          type="회원가입"
          role={"점주 사용자"}
          navigate={navigate}
        />
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
  rolePickerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    height: 200,
    marginTop: 20,
  },
  idCheckTextContainer: { flexDirection: "row" },
});
