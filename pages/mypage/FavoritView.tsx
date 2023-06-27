import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { FavoritType, getFavoritList } from "../../API/getFavoritList";

export default function FavoritView() {
  const [reviewData, setReviewData] = useState<Array<FavoritType>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const fetchReviewData = async () => {
      setIsLoading(true);
      const response = await getFavoritList({ id: 0 });
      setIsLoading(false);
      if (!isLoading) setReviewData(response);
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
                {reviewData.map(() => {
                  return <View></View>;
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
