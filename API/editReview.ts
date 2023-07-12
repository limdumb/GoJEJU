import { baseInstance } from "./instance";
import { ReviewRequestType } from "./postReview";


export default async function editReview(props: ReviewRequestType) {
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
