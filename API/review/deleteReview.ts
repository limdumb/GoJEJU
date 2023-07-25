import { baseInstance } from "../instance";

interface DeleteReviewProps {
  userId: number;
  reviewId: number;
}

export default async function deleteReview(props: DeleteReviewProps) {
  const request = { reviewId: props.reviewId };
  try {
    const response = await baseInstance.delete("", { data: request });
    return response.status;
  } catch (err) {}
}
