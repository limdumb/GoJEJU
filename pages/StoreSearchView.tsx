import { useState } from "react";
import Header from "../components/Header";
import CustomText from "../components/CustomText";
import StoreBox from "../components/SearchView/StoreBox";
import { ScrollView, StyleSheet, View } from "react-native";
import SearchInput from "../components/SearchView/SearchInput";

export default function StoreSearchView() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <Header />
        <View style={styles.searchInputSection}>
          <SearchInput
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </View>
        <View style={styles.searchConuntContainer}>
          <CustomText children={`100개의 카페 검색결과`} fontSize={"18px"} />
        </View>
        <View style={styles.searchResultContainer}>
          <StoreBox
            imageUrl={
              "https://thumb.mtstarnews.com/06/2023/05/2023051815100436917_1.jpg/dims/optimize"
            }
            name={"덤덤카페"}
            storeDescription={"좋은 뷰와 착한 가격이 함께 있습니다 :)"}
            rating={5}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },
  scrollViewContainer: { height: "100%" },
  searchInputSection: {
    width: "100%",
    height: 90,
    alignItems: "center",
    justifyContent: "center"
  },
  searchConuntContainer: {
    width: "100%",
    height: 34,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    paddingLeft: 10
  },
  searchResultContainer: {
    width: "100%",
    height: "100%"
  },
});
