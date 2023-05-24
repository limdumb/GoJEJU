import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import RolePicker from "../components/RolePicker";

export default function CafeSearchView() {
  return (
    <View style={styles.container}>
      <Header />
      <RolePicker role={"일반 사용자"} navigate={""} />
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
