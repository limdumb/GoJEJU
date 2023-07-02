export interface FavoritListPropsType {
  id: number
}

export interface FavoritType {
  id: number
  imageUrl: string
  name: string
  storeDescription: string
  rating: number
}

export const getFavoritList = async (props: FavoritListPropsType): Promise<FavoritType[]> => {
  return await new Promise((resolve, reject) => {
    const data: FavoritType[] = []
    try {
      for (let i = 1; i < 10; i++) {
        data.push({
          id: i,
          imageUrl: 'https://upload3.inven.co.kr/upload/2023/05/06/bbs/i15108989430.jpg?MW=800',
          name: '덤덤카페',
          storeDescription: '안녕하세요 저희 덤덤카페는 정말로 좋은 원두를 사용하고있습니다 :) 믿고즐겨주세요',
          rating: i
        })
      }
    } catch (err) {

    }

    resolve(data)
  })
}
