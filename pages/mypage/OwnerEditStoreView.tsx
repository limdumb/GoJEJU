import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import {
  EditStoreRequestType,
  ownerEditStore,
  ScheduleValue,
  SNSValue,
} from "../../API/OwnerStore/ownerEditStore";
import { RootStackParamList } from "../../App";
import AuthButton from "../../components/Auth/AuthButton";
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
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();
  const { data, isLoading, error } = useFetch<EditStoreRequestType>("");
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [scheduleValue, setScheduleValue] = useState<Array<ScheduleValue>>(
    data.storeSchedules
  );
  const [storeName, setStoreName] = useState(data.name);
  const [storeDescription, setStoreDescription] = useState(data.description);
  const [snsValue, setSnsValue] = useState<Array<SNSValue>>([
    { type: "instargram", url: "", nickName: "" },
  ]);

  const [storeNumber, setStoreNumber] = useState(data.phone);
  const [jibunAddressValue, setJibunAdressValue] = useState("");
  const [roadAdressValue, setRoadAdressValue] = useState("");

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const dayOfTheWeek = getWeekArray();
  const emdInformation = emdNameArray().filter((el) => {
    return el.name !== "전체";
  });

  const changeNickName = (value: string) => {
    const updatedSnsValue = [...snsValue];
    updatedSnsValue[0].nickName = value;
    updatedSnsValue[0].url = `https://www.instagram.com/${value}/`;
    setSnsValue(updatedSnsValue);
  };

  const EditRequestValue: EditStoreRequestType = {
    name: storeName,
    description: storeDescription,
    jibunAddress: jibunAddressValue,
    roadAddress: roadAdressValue,
    storeSchedules: scheduleValue,
    phone: storeNumber,
    SNS: snsValue,
    openStatus: isEnabled ? "OPEN" : "CLOSED",
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
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
            roadAdressValue={roadAdressValue}
            setRoadAdressValue={setRoadAdressValue}
            jibunAdressValue={jibunAddressValue}
            setJibunAdressValue={setJibunAdressValue}
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
                setScheduleValue={setScheduleValue}
                scheduleValue={scheduleValue}
                day={el.day}
                index={index}
              />
            );
          })}
        </View>
        <View>
          <EditContactBox
            changeNickName={changeNickName}
            setStoreNumber={setStoreNumber}
            snsValue={snsValue}
            storeNumber={storeNumber}
          />
        </View>
        <View style={styles.submitbuttonWrapper}>
          <AuthButton
            children="업체 등록하기"
            pressFunction={async () => {
              const addStoreResponse = await ownerEditStore(EditRequestValue);
              if (addStoreResponse === 200) {
                Alert.alert("수정이 완료 되었습니다.");
                navigate.navigate("MainView");
              }
            }}
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
  submitbuttonWrapper: {
    width: "100%",
    height: 80,
    justifyContent: "center",
  },
});
