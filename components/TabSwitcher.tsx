import { Button, StyleSheet, View } from "react-native";

interface Props {
  setIsTabType: React.Dispatch<React.SetStateAction<"홈" | "리뷰">>;
}

export default function TabSwitcher(props: Props) {
  const tabsArray: { tabName: "홈" | "리뷰" }[] = [
    { tabName: "홈" },
    { tabName: "리뷰" },
  ];
  return (
    <View style={styles.tabContainer}>
      {tabsArray.map((tab) => {
        return (
          <Button
            key={tab.tabName}
            title={tab.tabName}
            color={"black"}
            onPress={() => props.setIsTabType(tab.tabName)}
          />
        );
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
