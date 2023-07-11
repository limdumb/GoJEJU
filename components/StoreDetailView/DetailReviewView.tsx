import { useState } from "react";
import { View } from "react-native";
import { type ReviewResponseType } from "../../API/getReviewList";
import useFetch from "../../customHook/useFetch";
import ReviewBox from "./ReviewBox";

interface Props extends ReviewResponseType {
  // 추후 들어와야하는 Props가 생기면 추가예정
}

export default function DetailReviewView(props: Props) {
  const [page, setPage] = useState(0);
  const { data, isLoading, error } = useFetch(``);
  return (
    <View>
      {props.reviews.map((el) => {
        return (
          <ReviewBox
            key={el.id}
            id={el.id}
            userId={el.userId}
            userName={el.userName}
            userProfileImage={el.userProfileImage}
            reviewImages={el.reviewImages}
            reviewText={el.reviewText}
            loginUserId={2}
            // 추후 머지 진행후 변경예정
          />
        );
      })}
    </View>
  );
}
