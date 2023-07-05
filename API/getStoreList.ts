import { type StoreCardType } from '../components/MainView/StoreCard'
export interface StoreListDataType {
  stores: StoreCardType[]
}

export const getStoreList = async (): Promise<StoreListDataType> => {
  return await new Promise((resolve, reject) => {
    const responseDataArr: StoreListDataType = {
      stores: []
    }
    try {
      
    } catch (err) {
      reject(console.error(err))
    }
    resolve(responseDataArr)
  })
}
