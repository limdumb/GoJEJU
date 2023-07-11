import { baseInstance } from "./instance";

interface ReviewRequestType {
  images: string[];
  body: string;
  rating: number;
}

export default async function postReview(props: ReviewRequestType) {
  const request = {
    images: props.images,
    body: props.body,
    rating: props.rating,
  };
  try {
    const response = await baseInstance.post("", request);
    return response.status;
  } catch (err) {}
}
