import { baseInstance } from "../instance";

export interface ReviewRequestType {
  images: string[];
  body: string;
  rating: number;
  storeId: number
}

export default async function postReview(props: ReviewRequestType) {
  const request = {
    storeId: props.storeId,
    images: props.images,
    body: props.body,
    rating: props.rating,
  };
  try {
    const response = await baseInstance.post("", request);
    return response.status;
  } catch (err) {}
}
