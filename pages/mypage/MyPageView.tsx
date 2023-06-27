import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { RootStackParamList } from "../../App";
import MenuBox from "../../components/MyPageView/MenuBox";
import UserProfile from "../../components/MyPageView/UserProfile";

type MenuType = {
  menuType: "review" | "favorit";
  navigate: "MyReview" | "FavoritView";
};

type MyPageScreenNavigationProps = NavigationProp<
  RootStackParamList,
  "MyPageView"
>;

export default function MyPageView() {
  const navigate = useNavigation<MyPageScreenNavigationProps>();
  const menuArr: MenuType[] = [
    { menuType: "review", navigate: "MyReview" },
    { menuType: "favorit", navigate: "FavoritView" },
  ];
  return (
    <View style={styles.container}>
      <UserProfile
        name="김민정"
        image={"https://img-store.theqoo.net/KJIpDj.webp"}
        introduce={"🐰 맛집을 좋아합니다 🍚 한식을 좋아합니다"}
        totalReviews={5}
        totalLikes={3}
      />
      <View style={styles.line} />
      <View style={styles.menuList}>
        {menuArr.map((el) => {
          return (
            <TouchableOpacity
              key={el.menuType}
              onPress={() => {
                navigate.navigate(el.navigate);
              }}
            >
              <MenuBox usage={el.menuType} />
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.signOutContainer}>
        <Button title="Sign Out" color={"black"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "white" },
  line: { width: "100%", borderBottomWidth: 1, borderBottomColor: "#969090" },
  menuList: { width: "90%", height: "65%", paddingTop: 10 },
  signOutContainer: { width: "90%", height: 40 },
});
