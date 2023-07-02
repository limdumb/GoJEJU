import { type NavigationProp, useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { type FavoritType, getFavoritList } from '../../API/getFavoritList'
import { type RootStackParamList } from '../../App'
import StoreBox from '../../components/SearchView/StoreBox'
import Spinner from '../../components/Spinner'

export default function FavoritView () {
  const navigate = useNavigation<NavigationProp<RootStackParamList>>()
  const [reviewData, setReviewData] = useState<FavoritType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [pages, setPages] = useState(0)

  useEffect(() => {
    const fetchReviewData = async () => {
      setIsLoading(true)
      const response = await getFavoritList({ id: 0 })
      setIsLoading(false)
      if (!isLoading) setReviewData(response)
    }

    fetchReviewData()
  }, [])
  return (
    <View style={styles.container}>
      <ScrollView>
        {!isLoading
          ? (
          <View>
            {reviewData.length !== 0
              ? (
              <View style={styles.favoritListContainer}>
                {reviewData.map((el) => {
                  return (
                    <StoreBox
                      key={el.id}
                      imageUrl={el.imageUrl}
                      name={el.name}
                      storeDescription={el.storeDescription}
                      rating={el.rating}
                      navigate={navigate}
                    />
                  )
                })}
              </View>
                )
              : null}
          </View>
            )
          : <Spinner/>}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: 'white' },
  favoritListContainer: { marginTop: 10, marginBottom: 10 }
})
