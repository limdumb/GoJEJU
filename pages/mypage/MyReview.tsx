import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { getReviewList, ReviewType } from "../../API/getReviewList";
import ReviewBox from "../../components/StoreDetailView/ReviewBox";

export default function MyReview() {
  const [reviewData, setReviewData] = useState<Array<ReviewType>>([]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const fetchReviewData = async () => {
      const response = await getReviewList({ page: pages });
      setReviewData(response.reviews);
    };

    fetchReviewData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {reviewData.map((el) => {
          return (
            <ReviewBox
              key={el.id}
              id={el.id}
              userName={el.userName}
              userProfileImage={el.userProfileImage}
              reviewImages={el.reviewImages}
              reviewText={el.reviewText}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "white" },
});
