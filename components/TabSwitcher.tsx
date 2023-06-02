import { Button, StyleSheet, View } from "react-native";

export default function TabSwitcher() {
  const tabsArray = [{ tabName: "홈" }, { tabName: "리뷰" }];
  return (
    <View style={styles.tabContainer}>
      {tabsArray.map((tab) => {
        return <Button key={tab.tabName} title={tab.tabName} color={"black"} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
