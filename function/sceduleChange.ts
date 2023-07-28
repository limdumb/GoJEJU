import { ScheduleValue } from "../API/OwnerStore/ownerEditStore";

export const openScheduleChange = (
  index: number,
  start: string,
  setState: React.Dispatch<React.SetStateAction<ScheduleValue[]>>
) => {
  setState((preValue) => {
    const newScheduleValue = [...preValue];
    newScheduleValue[index].start = start;
    return newScheduleValue;
  });
};

export const endScheduleChange = (
  index: number,
  end: string,
  setState: React.Dispatch<React.SetStateAction<ScheduleValue[]>>
) => {
  setState((preValue) => {
    const newScheduleValue = [...preValue];
    newScheduleValue[index].end = end;
    return newScheduleValue;
  });
};

export const handleCheckboxChange = (
  index: number,
  checked: boolean,
  setState: React.Dispatch<React.SetStateAction<ScheduleValue[]>>
) => {
  setState((prevCheckboxes) => {
    const newCheckboxes = [...prevCheckboxes];
    newCheckboxes[index].type = checked ? "OPEN" : "CLOSED";
    return newCheckboxes;
  });
};
