import { StyleSheet, Text, View } from "react-native";

export default function MainView() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.map}></View>
      <View style={styles.cafeListContainer}>
        <Text style={styles.cafeListTitle}>카페리스트</Text>
        <View style={styles.cafeList}></View>
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
