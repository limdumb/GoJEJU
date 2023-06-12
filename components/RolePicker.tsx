import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import PeopleIcon from "react-native-vector-icons/MaterialIcons";
import CustomText from "./CustomText";
import { StyleSheet, View } from "react-native";
import { SignUpScreenNavigationProps } from "../pages/auth/SignUpView";

const CustomRolePicker = styled.TouchableOpacity`
  align-items: center;
  width: 130px;
  height: 130px;
  background-color: #f3f3f3;
  border-radius: 20px;
  padding-top: 15;
`;

export interface RolePickerProps {
  type: "로그인" | "회원가입";
  role: "일반 사용자" | "점주 사용자";
  navigate: SignUpScreenNavigationProps;
}

export default function RolePicker(props: RolePickerProps) {
  const onRolePicked = () => {
    if (props.type === "로그인") {
      const navigateAdress = "LoginView";
      props.navigate.navigate(navigateAdress);
    }

    if (props.type === "회원가입") {
      const navigateAdress =
        props.role === "일반 사용자" ? "UserSignUpView" : "OwnerSignUpView";
      props.navigate.navigate(navigateAdress, { role: props.role });
    }
  };

  return (
    <CustomRolePicker
      onPress={() => {
        onRolePicked();
      }}
    >
      {props.role !== "일반 사용자" ? (
        <Icon name="coffee" color={"#80BFA0"} size={60} />
      ) : (
        <PeopleIcon name="emoji-people" color={"#80BFA0"} size={60} />
      )}
      <View style={styles.textContainer}>
        <CustomText
          children={props.role}
          fontSize={"18px"}
          fontWeight={"bold"}
        />
      </View>
    </CustomRolePicker>
  );
}

const styles = StyleSheet.create({
  textContainer: { marginTop: 15 },
});
