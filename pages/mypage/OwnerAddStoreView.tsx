import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ScheduleValue } from "../../API/OwnerStore/ownerEditStore";
import AuthButton from "../../components/Auth/AuthButton";
import CustomText from "../../components/CustomText";
import AddAdressBox from "../../components/OwnerAddStoreView.tsx/AddAdressBox";
import EditContactBox from "../../components/OwnerEditStoreView/EditContactBox";
import ScheduleBox from "../../components/OwnerEditStoreView/ScheduleBox";
import StoreProfile from "../../components/OwnerEditStoreView/StoreEditProfile";
import { emdNameArray } from "../../function/emdNameArray";
import { getWeekArray } from "../../function/getWeekArray";

export default function OwnerAddStoreView() {
  const dayOfTheWeek = getWeekArray();
  const [storeName, setStoreName] = useState("");
  const [storeDescription, setStoreDescription] = useState("");
  const [storeNumber, setStoreNumber] = useState("");
  const [adressValue, setAdressValue] = useState("");
  const [scheduleValue, setScheduleValue] =
    useState<Array<ScheduleValue>>(dayOfTheWeek);
  const [snsValue, setSnsValue] = useState("");
  const emdInformation = emdNameArray();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.profileContainer}>
          <StoreProfile
            setStoreDescription={setStoreDescription}
            storeName={storeName}
            setStoreName={setStoreName}
            storeDescription={storeDescription}
            imageUrl={""}
            name={""}
          />
        </View>
        <View style={styles.AddAdressWrapper}>
          <AddAdressBox
            adressValue={adressValue}
            setAdressValue={setAdressValue}
            emdArr={emdInformation}
          />
        </View>
        <View style={styles.dayCheckSection}>
          <CustomText
            children="영업시간 선택"
            marginLft="20px"
            fontSize="16px"
            fontWeight="bold"
          />
          {scheduleValue.map((el, index) => {
            return (
              <ScheduleBox
              setScheduleValue={setScheduleValue}
                scheduleValue={scheduleValue}
                day={el.day}
                index={index}
              />
            );
          })}
        </View>
        <EditContactBox
          setSnsValue={setSnsValue}
          setStoreNumber={setStoreNumber}
          snsValue={snsValue}
          storeNumber={storeNumber}
        />
        <View style={styles.submitbuttonWrapper}>
          <AuthButton children="업체 등록하기" pressFunction={() => {}} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  scrollStyle: { alignItems: "center" },
  profileContainer: {
    width: "100%",
    height: 160,
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
  AddAdressWrapper: {
    width: "100%",
    height: 300,
  },
  dayCheckSection: {
    width: "100%",
    height: 270,
    paddingTop: 10,
    justifyContent: "space-around",
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: "#C3C3C3",
  },
  submitbuttonWrapper: {
    width: "100%",
    height: 80,
    justifyContent: "center",
  },
});
