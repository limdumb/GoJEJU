import { baseInstance } from "../instance";
import { ScheduleValue, SNSValue } from "./ownerEditStore";

export interface AddStoreRequestType {
  request:{
    name: string
    description:string;
    jibunAddress: string;
    roadAddress: string;
    storeSchedules: ScheduleValue[]
    phone: string;
    SNS: SNSValue[]
  }
}


export const postOwnerAddStore = async (props:AddStoreRequestType) => {
  const request = props.request
  try {
    const response = await baseInstance.post("api/store/new");
  } catch (err) {}
};
