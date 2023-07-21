import { baseInstance } from "../instance";

interface DeleteReviewProps {
  reviewId: number;
}

export default async function deleteReview(props: DeleteReviewProps) {
  try {
    const response = await baseInstance.delete("")
    return response.status
  } catch (err) {}
}
