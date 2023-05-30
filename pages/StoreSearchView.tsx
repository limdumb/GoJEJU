import { StyleSheet, View } from "react-native";
import Header from "../components/Header";

export default function StoreSearchView() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
});
