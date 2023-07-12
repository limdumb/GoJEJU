import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import StarIcon from "react-native-vector-icons/FontAwesome";

interface RatingPropsType {
  totalStars: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  rating: number;
}

const RatingStar = (props: RatingPropsType) => {
  const handleRate = (newRating: number) => {
    props.setRating(newRating);
  };

  const renderStar = (index: number) => {
    const iconName = index < props.rating ? "star" : "star-o";
    return (
      <TouchableOpacity key={index} onPress={() => handleRate(index + 1)}>
        <StarIcon name={iconName} size={20} color={"#FFD233"} />
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
