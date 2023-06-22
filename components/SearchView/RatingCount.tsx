import { StyleSheet } from "react-native";
import { View } from "react-native";
import StarIcon from "react-native-vector-icons/AntDesign";
import CustomText from "../CustomText";

interface RatingPropsType{
  count:number
  reviewCount:number
}

export default function RatingCount(props:RatingPropsType) {
  return (
    <View style={styles.ratingContainer}>
      <StarIcon name="star" size={20}  color={"#FFD233"}/>
      <CustomText marginLft="5px" children={`${props.count} (${props.reviewCount}건)`}/>
    </View>
  );
}

const styles=StyleSheet.create({
  ratingContainer:{flexDirection:"row", alignItems:"center"}
})