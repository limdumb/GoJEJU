import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View } from "react-native";
import ScheduleBox from "../../components/OwnerSettingView/ScheduleBox";
import StoreProfile from "../../components/OwnerSettingView/StoreEditProfile";
import StoreStateToggle from "../../components/OwnerSettingView/StoreStateToggle";

export default function OwnerSettingView() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.profileContainer}>
          {/* 추후 데이터변경 예정 */}
          <StoreProfile imageUrl={""} name={""} storeDescription={""} />
        </View>
        <View style={styles.storeToggleContainer}>
          <StoreStateToggle
            isEnabled={isEnabled}
            setIsEnabled={setIsEnabled}
            toggleSwitch={toggleSwitch}
          />
        </View>
        {/* <View style={{width:"100%",height:50,backgroundColor:'pink'}}> */}
          <ScheduleBox/>
        {/* </View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "white" },
  scrollViewContainer: { width: "100%" },
  profileContainer: {
    width: "100%",
    height: 160,
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
  storeToggleContainer: { height: 39 },
});
