import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { CustomText, MainScreenNavigationProps } from "../pages/MainView";

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
        <CustomText fontsize={14}>{props.cafeName}</CustomText>
      </View>
      <View style={styles.cafePrefaceWrapper}>
        <CustomText fontsize={12}>{props.cafePreface}</CustomText>
      </View>
      <View></View>
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
});
