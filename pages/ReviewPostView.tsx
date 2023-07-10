// 1. 리뷰 작성뷰 => 카페뷰 리뷰탭에 작성버튼 누르기 => 누를떄 카페 ID도 같이 가기
// 2. 별점 컴포넌트 => 소수점 단위로 구현해보기 0.5
// 리뷰 업로드를 위한 요청함수 => 요청함수 만들기
// 리뷰작성 예외처리 => 만약에 로그인이 되어있지 않다면 작성할수없게 리뷰탭에 작성버튼에 예외처리 진행하기
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { Button, ScrollView, TextInput } from "react-native";
import { Image, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../App";
import CommonInput from "../components/CommonInput";
import CustomText from "../components/CustomText";
import Carousel from "../components/StoreDetailView/Carousel";
interface ImageData {
  uri: string;
}

type ReviewPostRouteType = NativeStackScreenProps<
  RootStackParamList,
  "ReviewPostView"
>;

export default function ReviewPostView({ route }: ReviewPostRouteType) {
  const storeId = route.params;
  const screenWidth = Math.round(Dimensions.get("window").width);
  const [images, setImages] = useState<string[]>([]);
  const [reviewText, setReviewText] = useState("");

  const renderImages = () => {
    return (
      <>
        {images.length !== 0 ? (
          <Carousel
            images={images}
            gap={15}
            offset={36}
            pageWidth={screenWidth - (15 + 36) * 2}
          />
        ) : (
          <View style={styles.carouselContainer}>
            {/* 이미지 업로드 관련 추가 예정 */}
          </View>
        )}
      </>
    );
  };

  const handleSubmitReview = () => {
    // 리뷰 작성 후 서버에 저장하는 로직 구현
    console.log("Review:", {
      images,
      reviewText,
    });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* 추후 이미지 업로드 기능 예정 */}
        <ScrollView>{renderImages()}</ScrollView>
        <View style={styles.imageUploardWrapper}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.imageuploardContainer}
          >
            <CustomText
              children="사진 추가"
              color="white"
              fontWeight="bold"
              fontSize="20"
            />
          </TouchableOpacity>
        </View>
        <View>
          <CustomText children="별점을 입력해주세요" fontWeight="600" />
        </View>
        <View style={styles.inputWrapper}>
          <CommonInput
            changeFunc={setReviewText}
            type={"text"}
            width={"360px"}
            height={"300px"}
            value={reviewText}
            backgroundColor={"white"}
            placeholder={"리뷰를 입력하세요"}
            border={"1px solid #56C38D"}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  carouselContainer: { height: 210, borderWidth: 1, borderColor: "#C3C3C3" },
  imageuploardContainer: {
    width: 100,
    height: 35,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#06b495",
  },
  imageUploardWrapper: {
    width: "100%",
    height: 50,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
  inputWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 350,
  },
});
