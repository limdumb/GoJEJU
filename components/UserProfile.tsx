import { Image, Platform, View } from "react-native";
import { StyleSheet } from "react-native";
import CustomText from "./CustomText";

interface Props{
  image:string;
  introduce: string
  totalReviews: number;
  totalLikes:number;
  name:string
}

export default function UserProfile(props:Props) {
  return (
    <View style={styles.myProfileSection}>
      <View style={styles.shadowView}>
        <Image
          style={styles.profileImage}
          source={{ uri: props.image }}
        />
      </View>
      <View style={styles.userProfile}>
        <CustomText children=""/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myProfileSection: { width: "100%", padding: 10, height: 173, flexDirection: "row" },
  shadowView: {
    width: 173,
    height: 173,
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
  profileImage: {
    width: 173,
    height: 173,
    borderRadius: 10,
  },
  userProfile:{
    alignItems:"center"
  }
});
