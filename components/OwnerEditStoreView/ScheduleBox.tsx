import { StyleSheet, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import SelectDropdown from "react-native-select-dropdown";
import { ScheduleValue } from "../../API/OwnerStore/ownerEditStore";
import generateTimeArray from "../../function/generateTimeArray";
import CustomText from "../CustomText";

interface ScheduleBoxProps {
  day: string;
  openScheduleChange: (index: number, start: string) => void;
  closedScheduleChange: (index: number, end: string) => void;
  handleCheckboxChange: (index: number, checked: boolean) => void;
  index: number;
  scheduleValue: ScheduleValue[];
}

export default function ScheduleBox(props: ScheduleBoxProps) {
  const tiemArray = generateTimeArray();
  return (
    <View style={styles.contaienr}>
      <BouncyCheckbox
        size={25}
        fillColor="#00B828"
        innerIconStyle={{ borderWidth: 2 }}
        isChecked={false}
        onPress={(preventValue) => {
          props.handleCheckboxChange(props.index, preventValue);
        }}
      />
      <CustomText children={props.day} fontSize="17px" color="gray" />
      <View style={styles.selectContainer}>
        <SelectDropdown
          data={tiemArray}
          onSelect={(selectedItem: string) => {
            props.openScheduleChange(props.index, selectedItem);
          }}
          defaultValueByIndex={0}
          disabled={
            props.scheduleValue[props.index].type === "OPEN" ? false : true
          }
          buttonStyle={styles.selectButtonStyle}
        />
        <CustomText children="~" marginLft="10px" />
        <SelectDropdown
          defaultValueByIndex={0}
          data={tiemArray}
          onSelect={(selectedItem: string) => {
            props.closedScheduleChange(props.index, selectedItem);
          }}
          disabled={
            props.scheduleValue[props.index].type === "OPEN" ? false : true
          }
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
    alignItems: "center",
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
