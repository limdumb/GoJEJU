import { StyleSheet, View } from "react-native";
import UserIcon from "react-native-vector-icons/FontAwesome";
import CustomText from "../CustomText";
import Carousel from "./Carousel";
import { Dimensions } from "react-native";
import { ReviewType } from "../../API/getReviewList";


export default function ReviewBox(props: ReviewType) {
  const screenWidth = Math.round(Dimensions.get("window").width);
  return (
    <View style={styles.reviewBoxContainer}>
      <View style={styles.userInfoContainer}>
        {/* 5월 31일 2시 8분 User Icon 추후 데이터값 인입시 Image로 변경 예정 */}
        <UserIcon name="user-circle-o" size={40} />
        <CustomText
          children="유저이름입니다"
          fontWeight="bold"
          fontSize="20px"
          marginLft="12px"
          marginTop="2px"
        />
      </View>
      <View style={styles.reviewImageContainer}>
        <Carousel
          images={props.reviewImages}
          gap={15}
          offset={36}
          pageWidth={screenWidth - (15 + 36) * 2}
        />
      </View>
      <View>
        <CustomText children={`${props.reviewText}`} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reviewBoxContainer: {
    width: "100%",
    minHeight: 380,
    backgroundColor: "white",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  reviewImageContainer: { marginBottom: 20 },
});
