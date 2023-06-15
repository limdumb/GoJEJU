import { StyleSheet } from "react-native";
import { View } from "react-native";
import styled from "styled-components/native";

const ProfileImage = styled.Image``;

export default function MyPageView() {
  return (
    <View style={styles.container}>
      <View>
        <ProfileImage />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "white" },
});
