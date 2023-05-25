import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomText from "./CustomText";
import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

const CustomRolePicker = styled.TouchableOpacity`
  align-items: center;
  width: 130px;
  height: 130px;
  background-color: #f3f3f3;
  border-radius: 20px;
  padding-top: 15;
`;

export interface RolePickerProps {
  role: "일반 사용자" | "점주 사용자";
  navigate: string;
}

export default function RolePicker(props: RolePickerProps) {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <CustomRolePicker onPress={() => {}}>
      <Icon name="coffee" color={"#80BFA0"} size={60} />
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
