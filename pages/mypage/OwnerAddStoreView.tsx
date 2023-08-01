import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { ScheduleValue, SNSValue } from "../../API/OwnerStore/ownerEditStore";
import {
  AddStoreRequestType,
  postOwnerAddStore,
} from "../../API/OwnerStore/postOwnerAddStore";
import { RootStackParamList } from "../../App";
import AuthButton from "../../components/Auth/AuthButton";
import CustomText from "../../components/CustomText";
import AddAdressBox from "../../components/OwnerAddStoreView.tsx/AddAdressBox";
import EditContactBox from "../../components/OwnerEditStoreView/EditContactBox";
import ScheduleBox from "../../components/OwnerEditStoreView/ScheduleBox";
import StoreProfile from "../../components/OwnerEditStoreView/StoreEditProfile";
import { emdNameArray } from "../../function/emdNameArray";
import { getWeekArray } from "../../function/getWeekArray";

export default function OwnerAddStoreView() {
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();
  const dayOfTheWeek = getWeekArray();
  const [storeName, setStoreName] = useState("");
  const [storeDescription, setStoreDescription] = useState("");
  const [storeNumber, setStoreNumber] = useState("");
  const [jibunAddressValue, setJibunAdressValue] = useState("");
  const [roadAdressValue, setRoadAdressValue] = useState("");
  const [scheduleValue, setScheduleValue] =
    useState<Array<ScheduleValue>>(dayOfTheWeek);
  const [snsValue, setSnsValue] = useState<Array<SNSValue>>([
    { type: "instargram", url: "", nickName: "" },
  ])

  const changeNickName = (value: string) => {
    const updatedSnsValue = [...snsValue];
    updatedSnsValue[0].nickName = value;
    updatedSnsValue[0].url = `https://www.instagram.com/${value}/`;
    setSnsValue(updatedSnsValue);
  };

  const emdInformation = emdNameArray();

  const addRequestValue: AddStoreRequestType = {
    name: storeName,
    description: storeDescription,
    jibunAddress: jibunAddressValue,
    roadAddress: roadAdressValue,
    storeSchedules: scheduleValue,
    phone: storeNumber,
    SNS: snsValue,
  };

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
            roadAdressValue={roadAdressValue}
            setRoadAdressValue={setRoadAdressValue}
            jibunAdressValue={jibunAddressValue}
            setJibunAdressValue={setJibunAdressValue}
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
          changeNickName={changeNickName}
          setStoreNumber={setStoreNumber}
          snsValue={snsValue}
          storeNumber={storeNumber}
        />
        <View style={styles.submitbuttonWrapper}>
          <AuthButton
            children="업체 등록하기"
            pressFunction={async () => {
              const addStoreResponse = await postOwnerAddStore(addRequestValue);
              console.log(addRequestValue);
              if (addStoreResponse === 200) {
                Alert.alert("등록이 완료 되었습니다");
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
    height: 390,
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
