export interface CafeDetailDataType {
  cafeId: number;
  cafeImageUrl: string;
  cafeName: string;
  cafePreface: string;
  cafeStatus: boolean;
  cafeLocation: string;
  cafeNumber: string;
  instargramId: string;
  openingHours: [];
}

interface CafeDetailProps {
  cafeId: number;
}

export const getCafeDetail = (
  props: CafeDetailProps
): Promise<CafeDetailDataType> => {
  return new Promise((resolve, reject) => {
    const test: CafeDetailDataType = {
      cafeId: 1,
      cafeImageUrl: "https://newsimg.sedaily.com/2021/12/12/22V9KRDG8B_9.jpeg",
      cafeName: "ㅎㅇ",
      cafePreface: "ㅎㅇㅎㅇ",
      cafeStatus: true,
      cafeLocation: "제주특별시 서귀포시 행복동 12-12",
      cafeNumber: "010-7702-9884",
      instargramId: "dumb_Lim",
      openingHours: [],
    };
    resolve(test);
  });
};
