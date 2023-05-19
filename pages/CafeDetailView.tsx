import { StyleSheet, Text, View } from "react-native";

export default function CafeDetailView() {
  return (
    <View style={styles.container}>
      <View style={styles.cafePhoto}></View>
      <View style={styles.confirmatContainer}></View>
      <View style={styles.tabContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "pink" },
  cafePhoto: {
    height: 280,
    width: "100%",
    backgroundColor: "blue",
  },
  confirmatContainer: {
    height: 75,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
  tabContainer: {
    height: 54,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
    backgroundColor: "white",
  },
});
