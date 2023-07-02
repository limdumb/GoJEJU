import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { getReviewList, type ReviewType } from '../../API/getReviewList'
import ReviewBox from '../../components/StoreDetailView/ReviewBox'

export default function MyReview () {
  const [reviewData, setReviewData] = useState<ReviewType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [pages, setPages] = useState(0)

  useEffect(() => {
    const fetchReviewData = async () => {
      setIsLoading(true)
      const response = await getReviewList({ page: pages })
      setIsLoading(false)
      if (!isLoading) setReviewData(response.reviews)
    }

    fetchReviewData()
  }, [])
  // 예외처리해 0일때, 로딩일때
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* null값은 추후 머지 진행된 스피너와 리뷰가없다는 안내표시로 교체예정 */}
        {!isLoading
          ? (
          <View>
            {reviewData.length !== 0
              ? (
              <View>
                {reviewData.map((el) => {
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
              : null}
          </View>
            )
          : null}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: 'white' }
})
