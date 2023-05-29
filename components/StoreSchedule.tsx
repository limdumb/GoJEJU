import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { StoreSchedulesType } from "../API/getCafeDetail";
import { dayOfTheWeek } from "../function/dayOfTheWeek";
import CustomText from "./CustomText";
interface Props {
  storeSchedules: StoreSchedulesType[];
}

export default function StoreSchedule(props: Props) {
  const dayArr = dayOfTheWeek({ storeSchedules: props.storeSchedules });
  const scheduleTime = (
    type: "OPEN" | "CLOSED",
    start: string,
    end: string
  ) => {
    return type === "OPEN" ? `${start} ~ ${end}분 까지` : "휴무입니다.";
  };

  const lastOrderTime = () => {

  }
  return (
    <View style={styles.container}>
      <View>
        {dayArr.map((el) => {
          return (
            <View style={styles.dayContainer}>
              <CustomText children={`${el}:`} fontSize={"14px"} />
            </View>
          );
        })}
      </View>
      <View>
        {props.storeSchedules.map((schedule) => {
          return (
            <View style={styles.schedulesContainer} key={schedule.day}>
              <CustomText
                color={schedule.type === "OPEN" ? "black" : "red"}
                fontSize="15px"
                children={scheduleTime(
                  schedule.type,
                  schedule.start,
                  schedule.end
                )}
              />
            </View>
          );
        })}
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingLeft: 28,
    flexDirection: "row",
  },
  dayContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 23.2,
    width: 20,
  },
  schedulesContainer: {
    width: 150,
    flexDirection: "row",
    alignItems: "center",
    height: 23.2,
    paddingLeft: 3,
    paddingBottom: 1,
  },
});
