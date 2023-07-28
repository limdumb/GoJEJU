import { ScheduleValue } from "../API/OwnerStore/ownerEditStore";

export const getWeekArray = (): ScheduleValue[] => {
  const daysOfWeek = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  const dataArray: ScheduleValue[] = Array(7)
    .fill({ day: "", start: "00:00", end: "00:00", type: "CLOSED" }, 0, 7)
    .map((_, index) => {
      const day = daysOfWeek[index];
      const start = "00:00"; // Replace with the actual start time for the day
      const end = "00:00"; // Replace with the actual end time for the day
      const type = "CLOSED";

      return { day, start, end, type };
    });
  return dataArray;
};
