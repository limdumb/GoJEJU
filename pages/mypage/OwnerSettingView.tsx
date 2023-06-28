import { ScrollView, StyleSheet } from "react-native";
import { View } from "react-native";
import StoreProfile from "../../components/OwnerSettingView/StoreEditProfile";

export default function OwnerSettingView() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.profileContainer}>
          {/* 추후 데이터변경 예정 */}
          <StoreProfile imageUrl={""} name={""} storeDescription={""} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "white" },
  scrollViewContainer: { width: "100%" },
  profileContainer: { width: "100%", height: 160 },
});
