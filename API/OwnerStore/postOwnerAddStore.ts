import { baseInstance } from "../instance";
import { ScheduleValue, SNSValue } from "./ownerEditStore";

export interface AddStoreRequestType {
  name: string;
  description: string;
  jibunAddress: string;
  roadAddress: string;
  storeSchedules: ScheduleValue[];
  phone: string;
  SNS: SNSValue[];
}

export const postOwnerAddStore = async (props: AddStoreRequestType) => {
  const request = {
    name: props.name,
    description: props.description,
    jibunAddress: props.jibunAddress,
    roadAddress: props.roadAddress,
    storeSchedules: props.storeSchedules,
    phone: props.phone,
    SNS: props.SNS,
  };
  try {
    const response = await baseInstance.post("api/store/new");
    return response.status;
  } catch (err) {}
};
