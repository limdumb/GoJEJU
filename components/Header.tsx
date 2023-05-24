import { Text, View, StyleSheet, Button } from "react-native";
import styled from "styled-components/native";
import CustomText from "./CustomText";

const HeaderContainer = styled.View`
  height: 140px;
  width: 100%;
  background-color: white;
`;

export default function Header() {
  const tabArray = [
    { tabName: "지도" },
    { tabName: "카페검색" },
    { tabName: "추천카페" },
  ];
  
  return (
    <HeaderContainer>
      <View style={styles.headerTopContainer}>
        <Text>☁️Watching JEJU</Text>
        <Text>👥</Text>
      </View>
      <View style={styles.tabContainer}>
        {tabArray.map((el) => {
          return <Button color={"black"} title={el.tabName} />;
        })}
      </View>
    </HeaderContainer>
  );
}

const styles = StyleSheet.create({
  headerTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 48,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
    height: "70%",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "30%",
  },
});
