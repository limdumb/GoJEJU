import { useState } from "react";
import { StyleSheet, Switch } from "react-native";
import { View } from "react-native";
import CustomText from "../CustomText";
interface StoreToggleType{
  isEnabled: boolean
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>
  toggleSwitch: () => void
}

export default function StoreStateToggle(props: StoreToggleType) {
  return (
    <View style={styles.container}>
      <CustomText children="영업상태 변경" />
      <View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={props.isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#767577"
          onValueChange={props.toggleSwitch}
          value={props.isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
});
