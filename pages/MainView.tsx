import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { getCafeList, StoreListDataType } from "../API/getStoreList";
import { RootStackParamList } from "../App";
import CafeCard from "../components/CafeCard";
import Header from "../components/Header";

export type MainScreenNavigationProps = NavigationProp<
  RootStackParamList,
  "MainView"
>;

export default function MainView() {
  const [storeList, setStoreList] = useState<StoreListDataType>({
    stores: [],
  });

  useEffect(() => {
    const cafeListResponse = async () => {
      const response = await getCafeList();
      setStoreList(response);
    };

    cafeListResponse();
  }, []);

  const navigate = useNavigation<MainScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.map}></View>
        <View style={styles.cafeListContainer}>
          <Text style={styles.cafeListTitle}>카페리스트</Text>
          <View style={styles.cafeList}>
            {storeList.stores.map((el) => {
              return (
                <CafeCard
                  key={el.id}
                  navigate={navigate}
                  id={el.id}
                  imageUrl={el.imageUrl}
                  name={el.name}
                  storeDescription={el.storeDescription}
                  storeStatus={el.storeStatus}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  scrollViewContainer: {
    width: "100%",
  },
  map: {
    height: 290,
    width: "100%",
    marginBottom: 10,
  },
  cafeListTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cafeListContainer: {
    flex: 1,
    width: "100%",
    padding: 20,
    backgroundColor: "white",
  },
  cafeList: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
});
