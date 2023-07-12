import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { TouchableOpacity, View } from "react-native";
import PenIcon from "react-native-vector-icons/FontAwesome5";
import { type ReviewResponseType } from "../../API/getReviewList";
import { RootStackParamList } from "../../App";
import useFetch from "../../customHook/useFetch";
import { useUserId } from "../../customHook/useUserId";
import CustomText from "../CustomText";
import ReviewBox from "./ReviewBox";

interface Props extends ReviewResponseType {
  storeId: number;
}

export default function DetailReviewView(props: Props) {
  const userId = useUserId();
  const tabArr = [{ tabName: "최신순" }, { tabName: "추천순" }];
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();
  const [page, setPage] = useState(0);
  const { data, isLoading, error } = useFetch(``);

  return (
    <View>
      <View style={styles.reviewTabContainer}>
        <TouchableOpacity
          onPress={() => {
            if (userId !== null) {
              navigate.navigate("ReviewPostView", { storeId: props.storeId });
            } else {
              Alert.alert("로그인 이후 이용 가능한 기능입니다.");
            }
          }}
        >
          <View style={styles.reviewTabWrapper}>
            <PenIcon style={styles.penIcon} name="pen" />
            <CustomText children="리뷰 작성하기" />
          </View>
        </TouchableOpacity>
        <View style={styles.filterTabContainer}>
          {tabArr.map((el) => {
            return <CustomText children={el.tabName} />;
          })}
        </View>
      </View>
      {props.reviews.length !== 0 ? (
        <>
          {props.reviews.map((el) => {
            return (
              <ReviewBox
                key={el.id}
                id={el.id}
                userName={el.userName}
                userProfileImage={el.userProfileImage}
                reviewImages={el.reviewImages}
                reviewText={el.reviewText}
                loginUserId={userId}
                userId={el.userId}
              />
            );
          })}
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  reviewTabContainer: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: "space-between",
    width: "100%",
  },
  reviewTabWrapper: { flexDirection: "row" },
  penIcon: { paddingTop: 3, marginRight: 5 },
  filterTabContainer: {
    flexDirection: "row",
    width: 90,
    justifyContent: "space-between",
  },
});
