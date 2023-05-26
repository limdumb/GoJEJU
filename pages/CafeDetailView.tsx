import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { CafeDetailDataType, getCafeDetail } from "../API/getCafeDetail";
import CustomText from "../components/CustomText";
import StatusToggle from "../components/StatusToggle";
import TabSwitcher from "../components/TabSwitcher";
import { cautionText } from "../function/cautionText";

export default function CafeDetailView() {
  const [cafeDetails, setCafeDetails] = useState<CafeDetailDataType>({
    cafeId: 0,
    cafeImageUrl: "",
    cafeName: "",
    cafePreface: "",
    cafeStatus: false,
    cafeLocation: "",
    cafeNumber: "",
    instargramId: "",
    openingHours: [],
  });
  useEffect(() => {
    const fetchCafeDetail = async () => {
      const response = await getCafeDetail({ cafeId: cafeDetails.cafeId });
      setCafeDetails(response);
    };

    fetchCafeDetail();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cafePhotoContainer}>
        <Image
          style={styles.cafePhoto}
          source={{ uri: cafeDetails.cafeImageUrl }}
        />
      </View>
      <View style={styles.confirmatContainer}>
        <View style={styles.onOffStatusContainer}>
          <StatusToggle
            cafeStatus={cafeDetails.cafeStatus}
            screen={"CafeDetailView"}
          />
        </View>
        <View style={styles.cautionTextContainer}>
          <CustomText color="#9E9E9E" fontSize="13" children={cautionText()} />
        </View>
      </View>
      <View style={styles.cafeInfoTitleContainer}>
        <CustomText
          fontWeight="bold"
          fontSize="16"
          children={cafeDetails.cafePreface}
        />
      </View>
      <View style={styles.tabContainer}>
        <TabSwitcher />
      </View>
      <View style={styles.adressInformationContainer}>
        <View style={styles.adressInfomation}>
          <Icon name="map-marker-alt" size={25} style={styles.adressIcon} />
          <CustomText fontSize="15" children={cafeDetails.cafeLocation} />
        </View>
        <View style={styles.favoritContainer}>
          <Icon name="star" size={20} style={styles.adressIcon} />
          <CustomText children="즐겨찾기" />
        </View>
      </View>
      <View style={styles.openTime}></View>
      <View style={styles.phoneNumber}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "white" },
  cafePhotoContainer: {
    height: 240,
    width: "100%",
  },
  cafePhoto: { width: "100%", height: "100%" },
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
  cafeInfoTitleContainer: {
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
    minHeight: 100,
  },
  phoneNumber: {
    width: "100%",
    backgroundColor: "white",
    height: 73,
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
});
