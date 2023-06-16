import { Image, StyleSheet } from "react-native";
import { Platform } from "react-native";
import { View } from "react-native";

export default function MyPageView() {
  return (
    <View style={styles.container}>
      <View style={styles.myProfile}>
        <View style={styles.shadowView}>
          <Image
            style={styles.profileImage}
            source={{ uri: "https://img-store.theqoo.net/KJIpDj.webp" }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "white" },
  myProfile: { width: "100%", padding: 5, height: 173, flexDirection: "row" },
  shadowView: {
    width: 173,
    height: 173,
    borderRadius: 10,
    ...Platform.select({
      ios:{
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        shadowColor:"gray"
      }
    })
  },
  profileImage: {
    width: 173,
    height: 173,
    borderRadius: 10,
  },
});
