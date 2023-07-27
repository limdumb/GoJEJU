import { baseInstance } from "../instance";

export interface ScheduleValue {
  day: string;
  start: string;
  end: string;
  type: "OPEN" | "CLOSED";
}
export interface SNSValue{
  type: string;
  url: string;
  nickName: string;
}

export interface OwnerEditType {
  storeState: "OPEN"|"CLOSED"
  name: string;
  description: string;
  jibunAddress: string;
  roadAddress: string;
  storeSchedules: ScheduleValue[];
  phone: string;
  SNS: SNSValue[]
}

export const ownerEditStore = async (props: OwnerEditType) => {
  const request: OwnerEditType = {
    name: props.name,
    description: props.description,
    jibunAddress: props.jibunAddress,
    roadAddress: props.roadAddress,
    storeSchedules: props.storeSchedules,
    phone: props.phone,
    SNS: props.SNS,
    storeState: props.storeState
  };
  try {
    const response = await baseInstance.put("", request);
    return response.status;
  } catch (err) {}
};
