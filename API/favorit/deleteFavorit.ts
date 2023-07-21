import { FavoritProps } from "./addFavorit";
import { baseInstance } from "../instance";

export const deleteFavorit = async (props: FavoritProps) => {
  try{
    const response = await baseInstance.post(`/api/favorit/${props.userId}`)
    return response.status
  }catch(err){

  }
};
