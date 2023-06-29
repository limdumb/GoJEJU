import { StyleSheet } from "react-native";
import { View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import SelectDropdown from "react-native-select-dropdown";
import generateTimeArray from "../../function/generateTimeArray";
import CustomText from "../CustomText";

interface ScheduleBoxProps {
  toggleCheckBox: boolean;
  setToggleCheckBox: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ScheduleBox(props: ScheduleBoxProps) {
  // 스케줄박스 map처리해
  const tiemArray = generateTimeArray();
  return (
    <View style={styles.contaienr}>
      <BouncyCheckbox
        size={25}
        fillColor="#00B828"
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked: boolean) => {
          props.setToggleCheckBox(isChecked);
        }}
      />
      <CustomText children="월요일" fontSize="17px" color="gray"/>
      <View style={styles.selectContainer}>
        <SelectDropdown
          data={tiemArray}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultValue={tiemArray[0]}
          buttonStyle={styles.selectButtonStyle}
        />
        <CustomText children="~" marginLft="10px" />
        <SelectDropdown
          defaultValue={tiemArray[0]}
          data={tiemArray}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonStyle={styles.selectButtonStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contaienr: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    width: "100%",
    height: 25,
  },
  selectContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  selectButtonStyle: {
    width: 95,
    height: 25,
    borderWidth: 1,
    borderColor: "#AAAAAA",
    backgroundColor: "white",
    borderRadius: 5,
    marginRight: 10,
  },
  closedContainer: { flexDirection: "row", alignItems: "center" },
});
