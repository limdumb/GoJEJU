export default function generateTimeArray(): string[] {
  const times: string[] = [];
  for (let hour = 0; hour <= 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedHour = hour.toString().padStart(2, "0");
      const formattedMinute = minute.toString().padStart(2, "0");
      const time = `${formattedHour}:${formattedMinute}`;
      if (formattedHour !== "24") {
        times.push(time);
      }
      if (formattedHour === "24" && formattedMinute === "00") {
        times.push("24:00");
      }
    }
  }
  return times;
}
