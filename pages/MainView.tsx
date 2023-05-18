import { StyleSheet, Text, View } from "react-native";

export default function MainView() {
  return (
    <View style={styles.container}>
      <Text>하이용ㅋㅋ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
