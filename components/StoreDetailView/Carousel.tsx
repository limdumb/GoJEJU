import { FlatList, Image, StyleSheet } from "react-native";
import { View } from "react-native";

interface CarouselProps {
  images: string[];
  gap: number;
  offset: number;
  pageWidth: number;
}

export default function Carousel(props: CarouselProps) {
  const renderItem = (item: string, index: number) => {
    return (
      <Image
        key={item}
        source={{ uri: item }}
        style={{
          width: props.pageWidth,
          marginHorizontal: props.gap / 2,
          marginLeft: 0,
          borderRadius: 5,
          marginRight: index === props.images.length - 1 ? 0 : 20,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      {props.images.length === 1 ? (
        <Image source={{ uri: props.images[0] }} style={styles.image} />
      ) : (
        <FlatList
          automaticallyAdjustContentInsets={false}
          data={props.images}
          decelerationRate="fast"
          horizontal
          renderItem={(item) => renderItem(item.item, item.index)}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 210,
    width: "100%",
  },
  imageWrapper: {
    width: 230,
    height: 210,
  },
  image: { width: "100%", height: "100%", borderRadius: 5 },
});
