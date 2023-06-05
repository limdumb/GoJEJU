import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../App";
import CustomText from "../components/CustomText";
import RolePicker from "../components/RolePicker";

// interface SignupType{
//   type:"kakao"|"google"|"normer"
// }

export type SignUpScreenNavigationProps = NavigationProp<RootStackParamList>;

export default function SignUpView() {
  const navigate = useNavigation<SignUpScreenNavigationProps>();
  // const signupType:SignupType[] = [
  //   { type: "kakao" },
  //   { type: "google" },
  //   { type: "normer" },
  // ];
  return (
    <View style={styles.container}>
      <View style={styles.logoSection}>
        <Text style={styles.logo}>Watching</Text>
        <Text style={styles.logo}>☁️ JeJu</Text>
      </View>
      <View style={styles.rolePickerContainer}>
        <RolePicker type="회원가입" role={"일반 사용자"} navigate={navigate} />
        <RolePicker type="회원가입" role={"점주 사용자"} navigate={navigate} />
      </View>
      <View style={styles.idCheckTextContainer}>
        <CustomText children="이미 계정이 있으신가요?" marginRgt="3px" />
        <TouchableOpacity onPress={() => navigate.navigate("LoginView")}>
          <CustomText children="여기를 클릭하세요!" />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.loginSelectSection}>
        {signupType.map((el)=>{
          return(<AuthBox  key={el.type} platform={el.type}/>)
        })}
      </View> */}
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
  rolePickerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    height: 200,
    marginTop: 20,
  },
  idCheckTextContainer: { flexDirection: "row" },
  loginSelectSection: {
    height: 280,
    width: "86%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});
