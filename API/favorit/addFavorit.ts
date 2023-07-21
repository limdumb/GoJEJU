import { baseInstance } from "../instance";

export interface FavoritProps {
  userId: number;
}

export const addFavorit = async (props: FavoritProps) => {
  try {
    const response = await baseInstance.post(`/api/favorit/${props.userId}`);
    return response.status;
  } catch (err) {}
};
