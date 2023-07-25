import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../../App";
import { ReviewResponseType } from "../../components/StoreDetailView/DetailReviewView";
import ReviewBox from "../../components/StoreDetailView/ReviewBox";
import useFetch from "../../customHook/useFetch";
import { useUserId } from "../../customHook/useUserId";

export default function MyReview() {
  const navigate = useNavigation<NavigationProp<RootStackParamList>>()
  const userId = useUserId()
  const {data, isLoading, error} = useFetch<ReviewResponseType>("");
  const [pages, setPages] = useState(0);
  const [filterValue, setFilterValue ] = useState("최신순")

  return (
    <View style={styles.container}>
      <ScrollView>
        {!isLoading ? (
          <View>
            {data.reviews.length !== 0 ? (
              <View>
                {data.reviews.map((el) => {
                  return (
                    <ReviewBox
                      key={el.id}
                      id={el.id}
                      userName={el.userName}
                      userProfileImage={el.userProfileImage}
                      reviewImages={el.reviewImages}
                      reviewText={el.reviewText}
                      loginUserId={userId}
                      navigate={navigate}
                      storeId={el.id}
                      userId={el.userId}
                      rating={el.rating}
                    />
                  );
                })}
              </View>
            ) : null}
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "white" },
});
