import { AxiosResponse } from "axios";
import { baseInstance } from "../instance";

export interface ReviewRequestType {
  images: string[] | null;
  body: string;
  rating: number;
  storeId: number;
}

interface ReviewResponseType {
  id: number;
}

export default async function postReview(props: ReviewRequestType) {
  const request = {
    storeId: props.storeId,
    images: props.images,
    body: props.body,
    rating: props.rating,
  };
  try {
    const response: AxiosResponse<ReviewResponseType, any> =
      await baseInstance.post("", request);
    return response.status;
  } catch (err) {}
}
