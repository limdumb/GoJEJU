import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomText from "./CustomText";

interface Props {
  cafeStatus: boolean;
}

export default function StatusToggle(props: Props) {
  return (
    <View style={styles.container}>
      <Icon
        name={
          props.cafeStatus
            ? "toggle-switch-outline"
            : "toggle-switch-off-outline"
        }
        size={50}
      />
      <CustomText
        fontSize="16px"
        fontWeight="bold"
        children={props.cafeStatus ? "현재 영업중" : "영업 종료"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
});
