import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";

type CafeDetailNaviggationProps = NavigationProp<
  RootStackParamList,
  "MainView"
>;

export default function MainView() {
  const navigation = useNavigation<CafeDetailNaviggationProps>();

  return (
    <View style={styles.container}>
      <Text>하이용ㅋㅋ</Text>
      <Button
        title="하이"
        onPress={() => {
          navigation.navigate("CafeDetailView");
        }}
      />
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
