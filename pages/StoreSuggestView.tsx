import { type NavigationProp, useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { getSuggestList, type SuggestDataType } from '../API/getSuggestList'
import { type RootStackParamList } from '../App'
import CustomText from '../components/CustomText'
import Header from '../components/Header'
import StoreBox from '../components/SearchView/StoreBox'
import Spinner from '../components/Spinner'

export type StoreSuggestNavigationProps = NavigationProp<
RootStackParamList,
'StoreSuggestView'
>

export default function StoreSuggestView () {
  const navigate = useNavigation<StoreSuggestNavigationProps>()
  const [suggestData, setSuggestData] = useState<SuggestDataType[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchSuggestData = async () => {
      setIsLoading(true)
      const response = await getSuggestList()
      setIsLoading(false)
      if (!isLoading) {
        setSuggestData(response)
      }
    }

    fetchSuggestData()
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        {isLoading
          ? (
          <View style={styles.spinnerContainer}>
            <Spinner />
          </View>
            )
          : (
          <>
            <View style={styles.searchConuntContainer}>
              <CustomText
                children={`금주의 ${suggestData.length}개의 추천 카페`}
                fontSize={'18px'}
                fontWeight={'bold'}
              />
            </View>
            <View style={styles.storeContainer}>
              {suggestData.map((el) => {
                return (
                  <StoreBox
                    key={el.id}
                    navigate={navigate}
                    imageUrl={el.imageUrl}
                    name={el.name}
                    storeDescription={el.storeDescription}
                    rating={el.rating}
                  />
                )
              })}
            </View>
          </>
            )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  titleContainer: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchConuntContainer: {
    width: '100%',
    height: 34,
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    paddingLeft: 10,
    marginBottom: 5
  },
  storeContainer: { width: '100%', height: '100%' },
  spinnerContainer: {
    height: 600,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
