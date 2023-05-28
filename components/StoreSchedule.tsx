import { View } from "react-native";
import { StoreSchedulesType } from "../API/getCafeDetail";
import { dayOfTheWeek } from "../function/dayOfTheWeek";
import CustomText from "./CustomText";
interface Props {
  storeSchedules: StoreSchedulesType[];
}

export default function StoreSchedule(props: Props) {
  const dayArr = dayOfTheWeek({ storeSchedules: props.storeSchedules });
  return (
    <>
      {props.storeSchedules.map((el) => {
        return <View key={el.day}></View>;
      })}
    </>
  );
}
