import { StyleSheet } from "react-native";
import { View } from "react-native";
import { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function ScheduleBox() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View>
      <View>
      <BouncyCheckbox
        size={25}
        fillColor="#00B828"
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked: boolean) => {}}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
