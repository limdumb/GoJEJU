import { Text, View, StyleSheet } from "react-native";
import styled from "styled-components/native";

const HeaderContainer = styled.View`
  height: 140px;
  width: 100%;
  background-color: white;
`;

export default function Header() {
  return (
    // 5.22일 헤더 생성 => 5월 22일 오후중으로 탭 컴포넌트로 분할 예정및 로고및 아이콘 추가 예정
    <HeaderContainer>
      <View style={styles.headerTopContainer}>
        <Text>로고입니다</Text>
        <Text>아이콘입니다.</Text>
      </View>
      <View style={styles.tabContainer}>
        <Text>탭입니다</Text>
        <Text>탭입니다</Text>
        <Text>탭입니다</Text>
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
    backgroundColor: "pink",
    height: "70%",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "30%",
  },
});
