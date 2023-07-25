import { type NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  type FavoritType,
  getFavoritList,
} from "../../API/favorit/getFavoritList";
import { type RootStackParamList } from "../../App";
import StoreBox from "../../components/SearchView/StoreBox";
import Spinner from "../../components/Spinner";
import useFetch from "../../customHook/useFetch";

interface FavoritListDataType {
  id: number;
  imageUrl: string;
  name: string;
  storeDescription: string;
  rating: number;
  reviewCount: number;
}

interface FavoritResponseType {
  hasNext: boolean;
  total: number;
  reviews: FavoritListDataType[];
}

export default function FavoritView() {
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();
  const { data, isLoading, error } = useFetch<FavoritResponseType>("");
  const [pages, setPages] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView>
        {!isLoading ? (
          <View>
            {data.reviews.length !== 0 ? (
              <View style={styles.favoritListContainer}>
                {data.reviews.map((el) => {
                  return (
                    <StoreBox
                      key={el.id}
                      id={el.id}
                      imageUrl={el.imageUrl}
                      name={el.name}
                      storeDescription={el.storeDescription}
                      rating={el.rating}
                      navigate={navigate}
                      reviewCount={el.reviewCount}
                    />
                  );
                })}
              </View>
            ) : <View></View>}
          </View>
        ) : (
          <Spinner />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "white" },
  favoritListContainer: { marginTop: 10, marginBottom: 10 },
});
