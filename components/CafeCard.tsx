import React from "react";
import { Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { MainScreenNavigationProps } from "../pages/MainView";
import CustomText from "./CustomText";

export interface CafeCardType {
  cafeId: number;
  cafeImageUrl: string;
  cafeName: string;
  cafePreface: string;
  cafeStatus: boolean;
}

interface CafeCardProps extends CafeCardType {
  navigate: MainScreenNavigationProps;
}

export default function CafeCard(props: CafeCardProps) {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        props.navigate.navigate("CafeDetailView", { cafeName: props.cafeName });
      }}
    >
      <View style={styles.cafeImageWrapper}>
        <Image source={{ uri: props.cafeImageUrl }} style={styles.cafeImage} />
      </View>
      <View style={styles.cafeNameWrapper}>
        <CustomText
          children={props.cafeName}
          fontSize="15px"
          fontWeight="bold"
        />
      </View>
      <View style={styles.cafePrefaceWrapper}>
        <CustomText
          children={props.cafePreface}
          fontSize="13px"
        />
      </View>
      <View style={styles.cafeStatusContainer}>
        <CustomText  fontSize="13px" children={props.cafeStatus ? "영업중" : "영업종료"}/>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 155,
    height: 190,
    marginBottom: 40,
  },
  cafeImage: { width: "100%", height: "100%" },
  cafeImageWrapper: { width: "100%", height: "60%" },
  cafeNameWrapper: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  cafePrefaceWrapper: {
    width: "100%",
    height: "20%",
    alignItems: "center",
  },
  cafeStatusContainer:{
    height:"10%"
    ,width:"100%",
    alignItems:"flex-end"
  }
});
