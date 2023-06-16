import { StyleSheet } from "react-native";
import { View } from "react-native";
import UserProfile from "../components/UserProfile";

export default function MyPageView() {
  return (
    <View style={styles.container}>
      <UserProfile
      name="김민정"
        image={"https://img-store.theqoo.net/KJIpDj.webp"}
        introduce={"🐰 맛집을 좋아합니다 🍚 한식을 좋아합니다"}
        totalReviews={5}
        totalLikes={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "white" },
});
