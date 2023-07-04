import { type NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { getStoreList, type StoreListDataType } from "../API/getStoreList";
import { type RootStackParamList } from "../App";
import StoreCard from "../components/MainView/StoreCard";
import Header from "../components/Header";
import { emdNameArray } from "../function/emdNameArray";
import AdressBox from "../components/AdressBox";

export type MainScreenNavigationProps = NavigationProp<
  RootStackParamList,
  "MainView"
>;

export default function MainView() {
  const [storeList, setStoreList] = useState<StoreListDataType>({
    stores: [],
  });
  const [adressValue, setAdressValue] = useState("");
  const adressArr = emdNameArray();

  useEffect(() => {
    const storeListResponse = async () => {
      const response = await getStoreList();
      setStoreList(response);
    };

    storeListResponse();
  }, []);

  const navigate = useNavigation<MainScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.map}>
          {adressArr.map((el) => {
            return (
              <AdressBox
                name={el.name}
                adress={el.adress}
                setAdressValue={setAdressValue}
                adressValue={adressValue}
              />
            );
          })}
        </View>
        <View style={styles.storeListContainer}>
          <Text style={styles.storeListTitle}>카페리스트</Text>
          <View style={styles.storeList}>
            {storeList.stores.map((el) => {
              return (
                <StoreCard
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
    backgroundColor: "white",
  },
  scrollViewContainer: {
    width: "100%",
  },
  map: {
    height: 185,
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
    flexWrap: "wrap",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
    paddingTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  storeListTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  storeListContainer: {
    flex: 1,
    width: "100%",
    padding: 20,
    backgroundColor: "white",
  },
  storeList: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
});
