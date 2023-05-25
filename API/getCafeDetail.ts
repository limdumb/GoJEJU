import { CafeCardType } from "../components/CafeCard";

export const getCafeDetail = (): Promise<Array<CafeCardType>> => {
  return new Promise((resolve, reject) => {
    const test: CafeCardType[] = [];
    try {
      for (let i = 1; i < 10; i++) {
        if (i !== 4) {
          test.push({
            cafeId: i,
            cafeImageUrl:
              "https://newsimg.sedaily.com/2021/12/12/22V9KRDG8B_9.jpeg",
            cafeName: "ㅎㅇ",
            cafePreface: "ㅎㅇㅎㅇ",
            cafeStatus: false,
          });
        } else {
          test.push({
            cafeId: i,
            cafeImageUrl:
              "https://newsimg.sedaily.com/2021/12/12/22V9KRDG8B_9.jpeg",
            cafeName: "ㅂㅇ",
            cafePreface: "ㅂㅇㅂㅇ",
            cafeStatus: true,
          });
        }
      }
    } catch (err) {
      reject(console.error(err));
    }
    resolve(test);
  });
};
