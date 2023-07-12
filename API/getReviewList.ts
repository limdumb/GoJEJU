export interface ReviewType {
  id: number
  userId: number
  userName: string
  userProfileImage: string
  reviewImages: string[]
  reviewText: string
}

export interface ReviewResponseType {
  hasNext: boolean
  total: number
  reviews: ReviewType[]
}

interface Props {
  storeId?: number
  userId?: number
  page: number
}

export const getReviewList = async (props: Props): Promise<ReviewResponseType> => {
  return await new Promise((resolve, reject) => {
    const test: ReviewResponseType = {
      hasNext: false,
      total: 0,
      reviews: []
    }
    try {
      for (let i = 1; i < 10; i++) {
        test.reviews.push({
          id: i,
          userName: `유저${i}`,
          userId:1,
          userProfileImage:
            'https://upload3.inven.co.kr/upload/2023/05/06/bbs/i15108989430.jpg?MW=800',
          reviewImages: [
            'https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/07/111139016.3.jpg',
            'https://gangnamkong.co.kr/web/product/big/202111/220d8f16e0821abd782ffc8c92118330.jpg'
          ],
          reviewText: '진짜 어쩌구저쩌구'
        })
      }
    } catch (err) {
      reject(console.error(err))
    }
    resolve(test)
  })
}
