import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import InstagramIcon from "react-native-vector-icons/FontAwesome";
import CallIcon from "react-native-vector-icons/MaterialIcons";
import { StoreDetailType, getStoreDetail } from "../API/getStoreDetail";
import CustomText from "../components/CustomText";
import StatusToggle from "../components/StatusToggle";
import StoreSchedule from "../components/StoreSchedule";
import TabSwitcher from "../components/TabSwitcher";
import { cautionText } from "../function/cautionText";
import AuthBox from "../components/AuthBox";

export default function StoreDetailView() {
  const [storeDetails, setStoreDetails] = useState<StoreDetailType>({
    id: 1,
    images: [],
    name: "",
    storeStatus: "OPEN",
    storeDescription: "",
    jubunAddress: "",
    roadAddress: "",
    storeSchedules: [
      {
        day: "MONDAY",
        start: "",
        end: "",
        lastOrder: "",
        type: "OPEN",
      },
    ],
    storePhoneNumber: "010-7702-9884",
    sns: [{ type: "INSTARGRAM", url: "", nickName: "" }],
  });

  useEffect(() => {
    const fetchStoreDetail = async () => {
      const response = await getStoreDetail({ id: storeDetails.id });
      setStoreDetails(response);
    };

    fetchStoreDetail();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.storePhotoContainer}>
          {storeDetails.images.map((el) => {
            return (
              <Image key={el} style={styles.storePhoto} source={{ uri: el }} />
            );
          })}
        </View>
        <View style={styles.confirmatContainer}>
          <View style={styles.onOffStatusContainer}>
            <StatusToggle
              storeStatus={storeDetails.storeStatus}
              screen={"StoreDetailView"}
            />
          </View>
          <View style={styles.cautionTextContainer}>
            <CustomText
              color="#9E9E9E"
              fontSize="13px"
              children={cautionText()}
            />
          </View>
        </View>
        <View style={styles.storeInfoTitleContainer}>
          <CustomText
            fontWeight="bold"
            fontSize="16px"
            children={storeDetails.storeDescription}
          />
        </View>
        <View style={styles.tabContainer}>
          <TabSwitcher />
        </View>
        <View style={styles.adressInformationContainer}>
          <View style={styles.adressInfomation}>
            <Icon name="map-marker-alt" size={25} style={styles.adressIcon} />
            <CustomText fontSize="15px" children={storeDetails.jubunAddress} />
          </View>
          <View style={styles.favoritContainer}>
            <Icon name="star" size={20} style={styles.adressIcon} />
            <CustomText children="즐겨찾기" />
          </View>
        </View>
        <View style={styles.openTime}>
          <View style={styles.openTitle}>
            <Icon
              name="clock"
              color={"#80BFA0"}
              size={20}
              style={styles.clockIcon}
            />
            <CustomText
              children="카페 영업시간"
              fontWeight="600"
              fontSize="16px"
            />
          </View>
          <View style={styles.openSchedule}>
            <StoreSchedule storeSchedules={storeDetails.storeSchedules} />
          </View>
        </View>
        <View style={styles.contactContainer}>
          <View style={styles.contactContents}>
            <CallIcon name="call-end" size={30} color={"#4ECB71"} />
            <CustomText
              children={`전화번호 ${storeDetails.storePhoneNumber}`}
              fontWeight={"bold"}
              marginLft={"8px"}
              fontSize={"15px"}
            />
          </View>
          <View style={styles.contactContents}>
            <InstagramIcon name="instagram" size={30} color={`#E4405F`} />
            {storeDetails.sns.map((sns) => {
              return (
                <CustomText
                  key={sns.nickName}
                  children={sns.nickName}
                  marginLft={"5px"}
                  fontWeight={"bold"}
                />
              );
            })}
          </View>
        </View>
        <View>
          <AuthBox platform="kakao" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  scrollView: {
    width: "100%",
  },
  storePhotoContainer: {
    height: 240,
    width: "100%",
  },
  storePhoto: { width: "100%", height: "100%" },
  confirmatContainer: {
    height: 79,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
  cautionTextContainer: {
    height: "40%",
    justifyContent: "center",
    paddingBottom: 10,
  },
  onOffStatusContainer: {
    width: "100%",
    height: "60%",
    alignItems: "center",
  },
  storeInfoTitleContainer: {
    width: "100%",
    height: 65,
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
  tabContainer: {
    height: 41,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
    backgroundColor: "white",
  },
  adressInformationContainer: {
    height: 59,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
  adressInfomation: { flexDirection: "row", alignItems: "center" },
  favoritContainer: { flexDirection: "row", alignItems: "center" },
  adressIcon: { marginRight: 8 },
  openTime: {
    width: "100%",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
    height: 210,
    paddingLeft: 15,
    paddingTop: 12,
  },
  openTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  clockIcon: { marginRight: 8 },
  openSchedule: {
    marginTop: 6,
  },
  contactContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    height: 80,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
  contactContents: {
    flexDirection: "row",
    alignItems: "center",
  },
});
