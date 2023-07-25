import { baseInstance } from "../instance";

export interface OwnerEditType {
  name: string;
  description: string;
  jibunAddress: string;
  roadAddress: string;
  storeSchedules: [
    {
      day: string;
      start: string;
      end: string;
      lastOrder: string;
      type: boolean;
    }
  ];
  phone: string;
  SNS: [
    {
      type: string;
      url: string;
      nickName: string;
    }
  ];
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
  };
  try {
    const response = await baseInstance.put("", request);
    return response.status;
  } catch (err) {}
};
