import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RoleSelectionView() {
  return (
    <View style={styles.container}>
      <View style={styles.logoSection}>
        <Text>로그인이에요</Text>
      </View>
      <View style={styles.positionChoiceSection}></View>
      <View style={styles.signupCheck}>
        <Text>혹시 아이디가 없으신가요?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logoSection: {
    width: "100%",
    height: 310,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  positionChoiceSection: {
    height: 280,
    backgroundColor: "blue",
    width: "86%",
  },
  signupCheck: {
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
