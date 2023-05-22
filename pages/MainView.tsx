import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import Header from "../components/Header";

type MainScreenNavigationProps = NavigationProp<RootStackParamList, "MainView">;

export default function MainView() {
  const [testData, setTestData] = useState({ cafeName: "" });
  const testFunc = () => {
    return new Promise(
      async (resolve: (value: { cafeName: string }) => void, reject) => {
        try {
          const test = { cafeName: "덤덤카페 아닌데?" };
          resolve(test);
        } catch (error) {
          reject(error);
        }
      }
    );
  };

  useEffect(() => {
    const realtest = async () => {
      const result = await testFunc();
      setTestData(result);
    };
    realtest();
  }, []);

  const navigate = useNavigation<MainScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.map}></View>
      <View style={styles.cafeListContainer}>
        <Text style={styles.cafeListTitle}>카페리스트</Text>
        <View style={styles.cafeList}>
          <Button
            title="버튼입니다"
            onPress={() => {
              navigate.navigate("CafeDetailView", testData);
            }}
          />
        </View>
      </View>
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
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    marginTop: 20,
  },
});
