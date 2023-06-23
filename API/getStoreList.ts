import { StoreCardType } from "../components/StoreCard";
export interface StoreListDataType {
  stores: StoreCardType[];
}

export const getStoreList = (): Promise<StoreListDataType> => {
  return new Promise((resolve, reject) => {
    const test: StoreListDataType = {
      stores: [],
    };
    try {
      for (let i = 1; i < 10; i++) {
        if (i !== 4) {
          test.stores.push({
            id: i,
            storeDescription: "안녕하세요 덤덤카페 입니다",
            imageUrl:
              "https://newsimg.sedaily.com/2021/12/12/22V9KRDG8B_9.jpeg",
            name: "덤덤카페",
            storeStatus: "OPEN",
          });
        } else {
          test.stores.push({
            id: i,
            storeDescription: "안녕하세요 쥬쥬카페입니다",
            imageUrl:
              "https://newsimg.sedaily.com/2021/12/12/22V9KRDG8B_9.jpeg",
            name: "주주카페",
            storeStatus: "CLOSED",
          });
        }
      }
    } catch (err) {
      reject(console.error(err));
    }
    resolve(test);
  });
};
