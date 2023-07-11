import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import StarIcon from "react-native-vector-icons/FontAwesome";

interface RatingPropsType {
  totalStars: number;
  onRate: (index: number) => void;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  rating: number;
}

const RatingStar = (props: RatingPropsType) => {
  const handleRate = (newRating: number) => {
    props.setRating(newRating);
    props.onRate(newRating);
  };

  const renderStar = (index: number) => {
    let iconName = "star-o";
    if (index < props.rating) iconName = "star";

    return (
      <TouchableOpacity key={index} onPress={() => handleRate(index + 1)}>
        <StarIcon name={iconName} size={20} color={"#FFD233"}/>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {[...Array(props.totalStars)].map((_, index) => renderStar(index))}
    </View>
  );
};

export default RatingStar;
