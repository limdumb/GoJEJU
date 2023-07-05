import { type NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { type RootStackParamList } from "../App";
import StoreCard, { StoreCardType } from "../components/MainView/StoreCard";
import Header from "../components/Header";
import { emdNameArray } from "../function/emdNameArray";
import AdressBox from "../components/AdressBox";
import useFetch from "../customHook/useFetch";
import Spinner from "../components/Spinner";

export interface StoreListDataType {
  total: number
  hasNext: boolean
  stores: StoreCardType[]
}

export type MainScreenNavigationProps = NavigationProp<
  RootStackParamList,
  "MainView"
>;

export default function MainView() {
  const [pages, setPages] = useState(0);
  const [adressValue, setAdressValue] = useState("");
  const { data, isLoading, error } = useFetch<StoreListDataType>(
    `/api/store/list?emdName=${adressValue}&page=${pages}`
  );
  const adressArr = emdNameArray();

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
            {!isLoading ? (
              <>
                {data?.stores.length !== 0
                  ? data?.stores.map((el) => {
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
                    })
                  : null}
              </>
            ) : (
              <Spinner />
            )}
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
