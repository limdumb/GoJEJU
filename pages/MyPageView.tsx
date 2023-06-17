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
      <View style={styles.line}/>
      <View style={styles.menuList}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "white" },
  line:{width:"100%", borderBottomWidth:1, borderBottomColor:"#969090"},
  menuList:{width:"100%",height:"60%", paddingTop:10}
});
