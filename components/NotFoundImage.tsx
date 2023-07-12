import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import CustomText from "./CustomText";

export default function NotFoundImage() {
  return (
    <View style={styles.container}>
      <Image style={styles.images} source={require("../images/noResult.png")} />
      <CustomText
        children="이런! 검색결과가 없습니다"
        fontSize="21px"
        fontWeight="bold"
      />
      <CustomText
        children="다른 검색어를 입력 해주세요!"
        fontSize="21px"
        fontWeight="bold"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  images: { width: 390, height: 400 },
});
