import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { getReviewList, type ReviewType } from "../../API/getReviewList";
import { RootStackParamList } from "../../App";
import ReviewBox from "../../components/StoreDetailView/ReviewBox";
import { useUserId } from "../../customHook/useUserId";

export default function MyReview() {
  const navigate = useNavigation<NavigationProp<RootStackParamList>>()
  const userId = useUserId()
  const [reviewData, setReviewData] = useState<ReviewType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState(0);
  const [filterValue, setFilterValue ] = useState("최신순")

  useEffect(() => {
    const fetchReviewData = async () => {
      setIsLoading(true);
      const response = await getReviewList({ page: pages , filterValue:filterValue});
      setIsLoading(false);
      if (!isLoading) setReviewData(response.reviews);
    };

    fetchReviewData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {!isLoading ? (
          <View>
            {reviewData.length !== 0 ? (
              <View>
                {reviewData.map((el) => {
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
