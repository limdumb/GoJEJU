import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomText from "./CustomText";

interface Props {
  storeStatus: string;
  screen: "StoreDetailView" | "MainView";
}

export default function StatusToggle(props: Props) {
  return (
    <View style={styles.container}>
      <Icon
        name={
          props.storeStatus === "OPEN" ? "toggle-switch" : "toggle-switch-off"
        }
        color={props.storeStatus === "OPEN" ? "#00B828" : "gray"}
        style={styles.onOffIcon}
        size={50}
      />
      <CustomText
        fontSize={props.screen === "MainView" ? "12" : "18"}
        fontWeight={props.screen === "MainView" ? "600" : "bold"}
        children={props.storeStatus ? "현재 영업중" : "영업 종료"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },
  onOffIcon: {
    marginRight: 10,
  },
});
