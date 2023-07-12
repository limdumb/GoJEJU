import { useState } from "react";
import Header from "../components/Header";
import CustomText from "../components/CustomText";
import StoreBox from "../components/SearchView/StoreBox";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import SearchInput from "../components/SearchView/SearchInput";
import getSearch, { type SearchDataType } from "../API/getSearch";
import Spinner from "../components/Spinner";
import { type NavigationProp, useNavigation } from "@react-navigation/native";
import { type RootStackParamList } from "../App";
import NotFoundImage from "../components/NotFoundImage";

type StoreSearchNavigate = NavigationProp<
  RootStackParamList,
  "StoreSearchView"
>;

export default function StoreSearchView() {
  const navigate = useNavigation<StoreSearchNavigate>();
  const [searchValue, setSearchValue] = useState("");
  const [isSearchCompleted, setIsSearchCompleted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchDataType[]>([]);

  const fetchSearchResults = async () => {
    setIsLoading(true);
    const response = await getSearch({
      searchValue,
    });
    setIsLoading(false);
    if (!isLoading) {
      setSearchResults(response);
      setIsSearchCompleted(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <Header />
        {!isSearchCompleted ? (
          isLoading ? (
            <View style={styles.spinnerContainer}>
              <Spinner />
            </View>
          ) : (
            <>
              <View style={styles.searchCompletedSection}>
                <SearchInput
                  submitFunction={fetchSearchResults}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  searchState={isSearchCompleted}
                />
              </View>
              <View style={styles.searchConuntContainer}>
                <CustomText
                  children={`${searchResults.length}개의 카페 검색결과`}
                  fontSize={"18px"}
                />
              </View>
              {searchResults.length !== 0 ? (
                <View style={styles.searchResultContainer}>
                  {searchResults.map((el) => {
                    return (
                      <StoreBox
                        navigate={navigate}
                        key={el.id}
                        imageUrl={el.imageUrl}
                        name={el.name}
                        storeDescription={el.storeDescription}
                        rating={el.rating}
                      />
                    );
                  })}
                </View>
              ) : <NotFoundImage/>}
              ) : null}
            </>
          )
        ) : (
          <>
            <View style={styles.searchInputSection}>
              <SearchInput
                submitFunction={fetchSearchResults}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                searchState={isSearchCompleted}
              />
            </View>
            <View style={styles.jejuImageContainer}>
              <Image
                style={styles.jejuImageContainer}
                source={{
                  uri: "https://blog.kakaocdn.net/dn/PU90c/btrfoSHCUh8/k7kGSgYM7tg8vpiwIglJy1/img.jpg",
                }}
              />
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  scrollViewContainer: { height: "100%" },
  searchInputSection: {
    position: "absolute",
    alignItems: "center",
    top: 190,
    zIndex: 1000,
    width: "100%",
  },
  searchCompletedSection: {
    width: "100%",
    height: 80,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  searchConuntContainer: {
    width: "100%",
    height: 34,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    paddingLeft: 10,
  },
  searchResultContainer: {
    width: "100%",
    height: "100%",
  },
  jejuImageContainer: { width: "100%", height: "208%" },
  spinnerContainer: {
    height: 600,
    alignItems: "center",
    justifyContent: "center",
  },
});
