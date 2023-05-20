import { StyleSheet, Text, View } from "react-native";

export default function SignUpView() {
  return (
    <View style={styles.container}>
      <View style={styles.logoSection}>
        <Text>로그인이에요</Text>
      </View>
      <View style={styles.loginSelectSection}>
        <Text>Gdgd</Text>
        <Text>Gdgd</Text>
        <Text>Gdgd</Text>
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
  loginSelectSection: {
    height: 280,
    width: "86%",
    backgroundColor: "blue",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});
