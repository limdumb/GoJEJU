import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Alert } from "react-native";
import { Dimensions, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { StyleSheet, View } from "react-native";
import postReview from "../API/review/postReview";
import { RootStackParamList } from "../App";
import CommonInput from "../components/CommonInput";
import CustomText from "../components/CustomText";
import RatingStar from "../components/RatingStar";
import Carousel from "../components/StoreDetailView/Carousel";
import * as ImagePicker from "expo-image-picker";
import Spinner from "../components/Spinner";

interface ImageData {
  uri: string;
}

type ReviewPostRouteType = NativeStackScreenProps<
  RootStackParamList,
  "ReviewPostView"
>;

export default function ReviewPostView({ route }: ReviewPostRouteType) {
  const storeId = route.params.storeId;
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const screenWidth = Math.round(Dimensions.get("window").width);
  const [images, setImages] = useState<Array<string>>([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(3);
  const [uploadLoading, setUploadLoading] = useState(false);

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
          <View style={styles.carouselContainer}></View>
        )}
      </>
    );
  };

  const uploadImage = async () => {
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) return null;
    }

    const imageArr: string[] = [...images];
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      aspect: [1, 1],
    });
    if (result.assets) {
      setUploadLoading(true);
      imageArr.push(result.assets[0].uri);
      setImages(imageArr);
      setUploadLoading(false);
    }
  };

  const handleSubmitReview = async () => {
    if (reviewText.length === 0) Alert.alert("리뷰를 입력해주세요!");
    if (reviewText.length >= 100)
      Alert.alert("리뷰는 100자 이상 입력할 수 없습니다. 확인해주세요!");
    if (reviewText.length !== 0 && reviewText.length < 100) {
      const response = await postReview({
        storeId: storeId,
        images: images,
        body: reviewText,
        rating: rating,
      });
      if (response === 200) {
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {uploadLoading ? <Spinner /> : null}
        <ScrollView>{renderImages()}</ScrollView>
        <View style={styles.imageUploardWrapper}>
          <TouchableOpacity
            onPress={uploadImage}
            style={styles.buttonContainer}
          >
            <CustomText
              children="사진 추가"
              color="white"
              fontWeight="bold"
              fontSize="20"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.ratingContainer}>
          <CustomText children="별점을 입력해주세요" fontWeight="600" />
          <RatingStar totalStars={5} setRating={setRating} rating={rating} />
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
          <View style={styles.textLengthBox}>
            <CustomText
              children={`${reviewText.length}/100`}
              color={"#C3C3C3"}
            />
          </View>
        </View>
        <View style={styles.submitSection}>
          <TouchableOpacity
            onPress={() => handleSubmitReview()}
            style={styles.buttonContainer}
          >
            <CustomText
              children="작성하기"
              color="white"
              fontWeight="bold"
              fontSize="20"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  ratingContainer: {
    borderBottomWidth: 1,
    borderColor: "#C3C3C3",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "space-between",
  },
  textLengthBox: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 3,
    paddingRight: 15,
  },
  carouselContainer: { height: 210, borderWidth: 1, borderColor: "#C3C3C3" },
  buttonContainer: {
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
    height: 360,
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
  submitSection: { marginTop: 20, alignItems: "flex-end", paddingRight: 15 },
});
