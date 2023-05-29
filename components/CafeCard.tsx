import React from "react";
import { Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { MainScreenNavigationProps } from "../pages/MainView";
import CustomText from "./CustomText";

export interface StoreCardType {
  id: number;
  imageUrl: string;
  name: string;
  storeDescription: string;
  storeStatus: string;
}

interface CafeCardProps extends StoreCardType {
  navigate: MainScreenNavigationProps;
}

export default function CafeCard(props: CafeCardProps) {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        props.navigate.navigate("CafeDetailView", {
          name: props.name,
        });
      }}
    >
      <View style={styles.cafeImageWrapper}>
        <Image source={{ uri: props.imageUrl }} style={styles.cafeImage} />
      </View>
      <View style={styles.cafeNameWrapper}>
        <CustomText children={props.name} fontSize="15px" fontWeight="bold" />
      </View>
      <View style={styles.cafePrefaceWrapper}>
        <CustomText children={props.storeDescription} fontSize="13px" />
      </View>
      <View style={styles.cafeStatusContainer}>
        <CustomText
          fontSize="13px"
          children={props.storeStatus ? "영업중" : "영업종료"}
        />
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
  cafeStatusContainer: {
    height: "10%",
    width: "100%",
    alignItems: "flex-end",
  },
});
