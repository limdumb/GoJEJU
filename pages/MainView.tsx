import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { getCafeList } from "../API/getCafeList";
import { RootStackParamList } from "../App";
import CafeCard, { CafeCardType } from "../components/CafeCard";
import Header from "../components/Header";

export type MainScreenNavigationProps = NavigationProp<
  RootStackParamList,
  "MainView"
>;

export default function MainView() {
  const [cafeListData, setCafeListData] = useState<Array<CafeCardType>>([]);

  useEffect(() => {
    const cafeListResponse = async () => {
      const response = await getCafeList();
      setCafeListData(response);
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
            {cafeListData.map((el) => {
              return (
                <CafeCard
                  key={el.cafeId}
                  cafeId={el.cafeId}
                  cafeImageUrl={el.cafeImageUrl}
                  cafeName={el.cafeName}
                  cafePreface={el.cafePreface}
                  cafeStatus={el.cafeStatus}
                  navigate={navigate}
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
    backgroundColor: "pink",
    alignItems: "center",
  },
  header: {
    height: 140,
    width: "100%",
    backgroundColor: "white",
  },
  scrollViewContainer:{
    width:"100%"
  },
  map: {
    height: 290,
    width: "100%",
    backgroundColor: "black",
    marginBottom: 10,
  },
  cafeListTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cafeListContainer: {
    flex: 1,
    backgroundColor: "blue",
    width: "100%",
    padding: 20,
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
