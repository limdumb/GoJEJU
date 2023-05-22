import { ScrollView, StyleSheet, View } from "react-native";

export type CafeDetailProps = {
  setCafeName: React.Dispatch<React.SetStateAction<string>>;
};

export default function CafeDetailView() {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cafePhoto}></View>
      <View style={styles.confirmatContainer}></View>
      <View style={styles.cafeInfoTitleContainer}></View>
      <View style={styles.tabContainer}></View>
      <View style={styles.adressInformation}></View>
      <View style={styles.openTime}></View>
      <View style={styles.phoneNumber}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  cafePhoto: {
    height: 240,
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
  cafeInfoTitleContainer: {
    width: "100%",
    height: 74,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
  tabContainer: {
    height: 44,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
    backgroundColor: "white",
  },
  adressInformation: {
    height: 59,
    width: "100%",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
  openTime: {
    width: "100%",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
    minHeight: 100,
  },
  phoneNumber: {
    width: "100%",
    backgroundColor: "white",
    height: 73,
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
});
