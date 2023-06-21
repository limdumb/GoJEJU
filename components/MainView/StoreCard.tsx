import React from "react";
import { Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { MainScreenNavigationProps } from "../../pages/MainView";
import CustomText from "../CustomText";
import StatusToggle from "../StatusToggle";

export interface StoreCardType {
  id: number;
  imageUrl: string;
  name: string;
  storeDescription: string;
  storeStatus: "OPEN" | "CLOSED" | "CLOSURE";
}

interface StoreCardProps extends StoreCardType {
  navigate: MainScreenNavigationProps;
}

export default function StoreCard(props: StoreCardProps) {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        props.navigate.navigate("StoreDetailView", {
          name: props.name,
        });
      }}
    >
      <View style={styles.storeImageWrapper}>
        <Image source={{ uri: props.imageUrl }} style={styles.storeImage} />
      </View>
      <View style={styles.storeNameWrapper}>
        <CustomText children={props.name} fontSize="15px" fontWeight="bold" />
      </View>
      <View style={styles.storePrefaceWrapper}>
        <CustomText children={props.storeDescription} fontSize="13px" />
      </View>
      <View style={styles.storeStatusContainer}>
        <StatusToggle storeStatus={props.storeStatus} screen={"MainView"} />
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
  storeImage: { width: "100%", height: "100%" },
  storeImageWrapper: { width: "100%", height: "50%" },
  storeNameWrapper: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  storePrefaceWrapper: {
    width: "100%",
    height: "20%",
    alignItems: "center",
  },
  storeStatusContainer: {
    height: "15%",
    width: "100%",
    alignItems: "flex-end",
  },
});
