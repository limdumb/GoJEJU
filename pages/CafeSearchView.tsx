import { useState } from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import CommonInput from "../components/CommonInput";
import Header from "../components/Header";

export default function CafeSearchView() {
  const [test, setTest] = useState("");

  return (
    <View style={styles.container}>
      <Header />
      <CommonInput
        backgroundColor="pink"
        width="100px"
        height="100px"
        value={test}
        changeFunc={setTest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
