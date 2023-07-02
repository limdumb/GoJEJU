import { View } from 'react-native'
import { type ReviewResponseType } from '../../API/getReviewList'
import ReviewBox from './ReviewBox'

interface Props extends ReviewResponseType {
  // 추후 들어와야하는 Props가 생기면 추가예정
}

export default function DetailReviewView (props: Props) {
  return (
    <View>
      {props.reviews.map((el) => {
        return (
          <ReviewBox
            key={el.id}
            id={el.id}
            userName={el.userName}
            userProfileImage={el.userProfileImage}
            reviewImages={el.reviewImages}
            reviewText={el.reviewText}
          />
        )
      })}
    </View>
  )
}
