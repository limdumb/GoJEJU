import { Image, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import UserIcon from "react-native-vector-icons/FontAwesome";
import CustomText from "./CustomText";

const ReviewImage = styled.Image`
  width: 260px;
  height: 210px;
  border-radius: 5px;
`;

interface ReviewPropsType {
  userName: string;
  userImage: string;
  reviewImage: string[];
  reviewMainText: string;
}

export default function ReviewBox(props: ReviewPropsType) {
  return (
    <View style={styles.reviewBoxContainer}>
      <View style={styles.userInfoContainer}>
        <UserIcon name="user-circle-o" size={40} />
        <CustomText
          children="유저이름입니다"
          fontWeight="bold"
          fontSize="20px"
          marginLft="12px"
          marginTop="2px"
        />
      </View>
      <View style={styles.reviewImageContainer}>
        <ReviewImage
          source={{
            uri: "https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/07/111139016.3.jpg",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reviewBoxContainer: {
    width: "100%",
    minHeight: 380,
    backgroundColor: "white",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  reviewImageContainer: { marginBottom: 20 },
});
