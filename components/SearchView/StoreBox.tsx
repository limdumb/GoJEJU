import { Image, Platform } from "react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";

interface StoreBoxPropsType {
  imageUrl: string;
  name: string;
  storeDescription: string;
  rating: number;
}
// 나머지 만들기 싲가해 Props까지 설정했음 Text View 잡아
export default function StoreBox(props: StoreBoxPropsType) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.storeImageContainer}>
        <View style={styles.shadowView}>
          <Image
            source={{
              uri: "https://thumb.mtstarnews.com/06/2023/05/2023051815100436917_1.jpg/dims/optimize",
            }}
            style={styles.storeImage}
          />
        </View>
      </View>
      <View style={styles.storeInfoContainer}>
        <CustomText children={props.name} fontSize={"20px"} fontWeight={"bold"} marginBtm={"10px"}/>
        <CustomText children={props.storeDescription} fontSize={"15px"} color={"#929292"}/>
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
