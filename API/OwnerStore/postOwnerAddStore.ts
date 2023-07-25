import { baseInstance } from "../instance";
// 7월 21일(금) Store Post 타입은 BackEnd확인 후 타입 재조정 예정
interface AddStoreRequestType {
  name: string
  description:string;
  jibunAddress: string;
  roadAddress: string;
  storeSchedules: [
    {
      day: string;
      start: string;
      end: string;
      type: string;
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

interface AddStorePropsType {
  
}

export const postOwnerAddStore = async () => {
  const request = {

  };
  try {
    const response = await baseInstance.post("api/store/new");
  } catch (err) {}
};
