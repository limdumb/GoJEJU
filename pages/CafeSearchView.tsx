import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";

export default function CafeSearchView() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>하이용</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
