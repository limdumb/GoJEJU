import { StyleSheet, View, Dimensions, Alert } from "react-native";
import UserIcon from "react-native-vector-icons/FontAwesome";
import CustomText from "../CustomText";
import Carousel from "./Carousel";
import { type ReviewType } from "../../API/getReviewList";
import DeleteIcon from "react-native-vector-icons/Feather";
import EditIcon from "react-native-vector-icons/AntDesign";
import deleteReview from "../../API/deleteReview";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";

interface ReviewBoxPropsType extends ReviewType {
  loginUserId: number | null;
  navigate: NavigationProp<RootStackParamList>;
  storeId: number;
}

export default function ReviewBox(props: ReviewBoxPropsType) {
  const screenWidth = Math.round(Dimensions.get("window").width);
  const reviewEditFunc = async () => {
    props.navigate.navigate("ReviewEditView", {
      storeId: props.storeId,
      images: props.reviewImages,
      reviewText: props.reviewText,
      rating: props.rating,
    });
  };
  const reviewDeleteFunc = async () => {
    const response = await deleteReview({ reviewId: props.id });
    if (response === 200) {
      Alert.alert("리뷰가 삭제 되었습니다!");
    }
  };
  return (
    <View style={styles.reviewBoxContainer}>
      <View style={styles.userInfoContainer}>
        {/* 5월 31일 2시 8분 User Icon 추후 데이터값 인입시 Image로 변경 예정 */}
        <View style={styles.userProfileWrapper}>
          <UserIcon name="user-circle-o" size={40} />
          <CustomText
            children="유저이름입니다"
            fontWeight="bold"
            fontSize="20px"
            marginLft="12px"
            marginTop="2px"
          />
        </View>
        {props.userId === props.loginUserId ? (
          <View style={styles.editContainer}>
            <DeleteIcon
              style={styles.deleteIcon}
              name="trash-2"
              size={24}
              onPress={() => {
                reviewDeleteFunc();
              }}
            />
            <EditIcon
              style={styles.editIcon}
              name="edit"
              size={24}
              onPress={() => {
                reviewEditFunc();
              }}
            />
          </View>
        ) : null}
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
    justifyContent: "space-between",
  },
  deleteIcon: { marginRight: 5 },
  editIcon: { paddingTop: 1 },
  userProfileWrapper: { flexDirection: "row", alignItems: "center" },
  reviewImageContainer: { marginBottom: 20 },
  editContainer: { flexDirection: "row" },
});
