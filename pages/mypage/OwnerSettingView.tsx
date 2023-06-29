import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View } from "react-native";
import CustomText from "../../components/CustomText";
import ScheduleBox from "../../components/OwnerSettingView/ScheduleBox";
import StoreProfile from "../../components/OwnerSettingView/StoreEditProfile";
import StoreStateToggle from "../../components/OwnerSettingView/StoreStateToggle";
import { getWeekArray } from "../../function/getWeekArray";

export default function OwnerSettingView() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleCheckboxChange = (index: number) => {
    setToggleCheckBox((prevCheckboxes) => {
      const newCheckboxes = [...prevCheckboxes];
      newCheckboxes[index] = !newCheckboxes[index];
      return newCheckboxes;
    });
  };

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const dayOfTheWeek = getWeekArray();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.profileContainer}>
          {/* 추후 데이터변경 예정 */}
          <StoreProfile imageUrl={""} name={""} storeDescription={""} />
        </View>
        <View style={styles.storeToggleContainer}>
          <StoreStateToggle
            isEnabled={isEnabled}
            setIsEnabled={setIsEnabled}
            toggleSwitch={toggleSwitch}
          />
        </View>
        <View style={styles.dayCheckSection}>
          <CustomText
            children="영업시간 선택"
            marginLft="20px"
            fontSize="16px"
          />
          {dayOfTheWeek.map((el, index) => {
            return (
              <ScheduleBox
                toggleCheckBox={toggleCheckBox}
                day={el}
                index={index}
                handleCheckboxChange={handleCheckboxChange}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "white" },
  scrollViewContainer: { width: "100%" },
  profileContainer: {
    width: "100%",
    height: 160,
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
  storeToggleContainer: { height: 39 },
  dayCheckSection: {
    width: "100%",
    height: 270,
    paddingTop: 10,
    justifyContent: "space-around",
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: "#C3C3C3",
  },
});
