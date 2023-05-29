export interface StoreSchedulesType {
  day:
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY";
  start: string;
  end: string;
  lastOrder: string;
  type: "OPEN" | "CLOSED";
}

export interface StoreDetailType {
  id: number;
  images: string[];
  name: string;
  storeStatus: "OPEN" | "CLOSED" | "CLOSURE";
  storeDescription: string;
  jubunAddress: string;
  roadAddress: string;
  storeSchedules: StoreSchedulesType[];
  storePhoneNumber: string;
  sns: { type: string; url: string }[];
}

interface CafeDetailProps {
  id: number;
}

export const getCafeDetail = (
  props: CafeDetailProps
): Promise<StoreDetailType> => {
  return new Promise((resolve, reject) => {
    const test: StoreDetailType = {
      id: 1,
      images: ["https://newsimg.sedaily.com/2021/12/12/22V9KRDG8B_9.jpeg"],
      name: "덤덤카페",
      storeStatus: "OPEN",
      storeDescription: "안녕하세요 덤덤카페 입니다.",
      jubunAddress: "제주특별시 서귀포구 행복동 12-12",
      roadAddress: "제주특별시 서귀포구 행복동 초록마을로 12길 8",
      storeSchedules: [
        {
          day: "MONDAY",
          start: "11:10",
          end: "22:40",
          lastOrder: "22:10",
          type: "OPEN",
        },
        {
          day: "TUESDAY",
          start: "11:10",
          end: "22:40",
          lastOrder: "22:10",
          type: "OPEN",
        },
        {
          day: "WEDNESDAY",
          start: "11:10",
          end: "22:40",
          lastOrder: "22:10",
          type: "OPEN",
        },
        {
          day: "THURSDAY",
          start: "11:10",
          end: "22:40",
          lastOrder: "22:10",
          type: "OPEN",
        },
        {
          day: "FRIDAY",
          start: "11:10",
          end: "22:40",
          lastOrder: "22:10",
          type: "OPEN",
        },
        {
          day: "SATURDAY",
          start: "11:10",
          end: "22:40",
          lastOrder: "22:10",
          type: "CLOSED",
        },
        {
          day: "SUNDAY",
          start: "11:10",
          end: "22:40",
          lastOrder: "22:10",
          type: "CLOSED",
        },
      ],
      storePhoneNumber: "010-7702-9884",
      sns: [{ type: "INSTARGRAM", url: "ss" }],
    };
    resolve(test);
  });
};
