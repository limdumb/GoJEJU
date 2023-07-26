import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  OwnerEditType,
  ScheduleValue,
} from "../../API/OwnerStore/ownerEditStore";
import CustomText from "../../components/CustomText";
import AddAdressBox from "../../components/OwnerAddStoreView.tsx/AddAdressBox";
import EditContactBox from "../../components/OwnerEditStoreView/EditContactBox";
import ScheduleBox from "../../components/OwnerEditStoreView/ScheduleBox";
import StoreProfile from "../../components/OwnerEditStoreView/StoreEditProfile";
import StoreStateToggle from "../../components/OwnerEditStoreView/StoreStateToggle";
import useFetch from "../../customHook/useFetch";
import { emdNameArray } from "../../function/emdNameArray";
import { getWeekArray } from "../../function/getWeekArray";

export default function OwnerEditStoreView() {
  const { data, isLoading, error } = useFetch<OwnerEditType>("");
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [scheduleValue, setScheduleValue] = useState<Array<ScheduleValue>>(
    data.storeSchedules
  );
  const [toggleCheckBox, setToggleCheckBox] = useState<Array<boolean>>(
    Array(7).fill(false, 0, 7)
  );
  const [snsValue, setSnsValue] = useState("");
  const [storeNumber, setStoreNumber] = useState("");
  const [adressValue, setAdressValue] = useState("");

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
  const emdInformation = emdNameArray().filter((el) => {
    return el.name !== "전체";
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.profileContainer}>
          <StoreProfile imageUrl={""} name={""} storeDescription={""} />
        </View>
        <View style={styles.AddAdressWrapper}>
          <AddAdressBox
            adressValue={adressValue}
            setAdressValue={setAdressValue}
            emdArr={emdInformation}
          />
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
                day={el.day}
                index={index}
                handleCheckboxChange={handleCheckboxChange}
              />
            );
          })}
        </View>
        <View>
          <EditContactBox
            setSnsValue={setSnsValue}
            setStoreNumber={setStoreNumber}
            snsValue={snsValue}
            storeNumber={storeNumber}
          />
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
  AddAdressWrapper: {
    width: "100%",
    height: 300,
  },
});
