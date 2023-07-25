import CustomText from "../CustomText";
import RatingCount from "./RatingCount";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import truncateString from "../../function/truncateString";
import { type RootStackParamList } from "../../App";
import { type NavigationProp } from "@react-navigation/native";

interface StoreBoxPropsType {
  id: number;
  imageUrl: string;
  name: string;
  storeDescription: string;
  rating: number;
  reviewCount: number;
  navigate: NavigationProp<RootStackParamList>;
}

export default function StoreBox(props: StoreBoxPropsType) {
  const transformDescription = truncateString({
    str: props.storeDescription,
    maxLength: 18,
  });
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.navigate.navigate("StoreDetailView", {
          id: props.id,
          name: props.name,
        });
      }}
    >
      <View style={styles.storeImageContainer}>
        <View style={styles.shadowView}>
          <Image
            source={{
              uri: props.imageUrl,
            }}
            style={styles.storeImage}
          />
        </View>
      </View>
      <View style={styles.storeInfoContainer}>
        <CustomText
          children={props.name}
          fontSize={"22px"}
          fontWeight={"bold"}
          marginBtm={"10px"}
        />
        <CustomText
          children={transformDescription}
          fontSize={"16px"}
          color={"#929292"}
          marginBtm={"5px"}
        />
        <View>
          <RatingCount count={props.rating} reviewCount={props.reviewCount} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 131,
    padding: 10,
    paddingLeft: 15,
    flexDirection: "row",
    backgroundColor: "white",
  },
  storeImageContainer: {
    width: 109,
    height: 109,
    marginRight: 15,
  },
  storeInfoContainer: {
    width: "60%",
    justifyContent: "center",
  },
  shadowView: {
    width: 109,
    height: 109,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        shadowColor: "gray",
      },
    }),
  },
  storeImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
