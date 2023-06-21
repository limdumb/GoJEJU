import { Image, Platform, View } from "react-native";
import { StyleSheet } from "react-native";
import CustomText from "../CustomText";

interface Props {
  image: string;
  introduce: string;
  totalReviews: number;
  totalLikes: number;
  name: string;
}

export default function UserProfile(props: Props) {
  return (
    <View style={styles.myProfileSection}>
      <View style={styles.shadowView}>
        <Image style={styles.profileImage} source={{ uri: props.image }} />
      </View>
      <View style={styles.userProfile}>
        <View style={styles.nameContainer}>
          <CustomText
            children={props.name}
            fontSize={"20px"}
            fontWeight={"bold"}
          />
        </View>
        <View style={styles.introduceContainer}>
          <CustomText fontSize="17px" children={props.introduce} />
        </View>
        <View style={styles.myReviewContainer}>
          <CustomText fontSize="16px" children="📖작성한리뷰" />
          <CustomText fontSize="16px" children={`${props.totalReviews}건`} />
        </View>
        <View style={styles.myLikeContainer}>
          <CustomText fontSize="16px" children="🏠좋아요가계" />
          <CustomText fontSize="16px" children={`${props.totalLikes}건`} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myProfileSection: {
    width: "100%",
    padding: 10,
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
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
  userProfile: {
    alignItems: "center",
    width: "45%",
    height: 173,
    paddingRight: 10,
  },
  nameContainer: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  introduceContainer: {
    paddingTop: 10,
    width: "100%",
    height: "50%",
  },
  myReviewContainer: {
    height: "15%",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  myLikeContainer: {
    height: "15%",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
});
