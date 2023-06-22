import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import SearchInput from "../components/SearchView/SearchInput";

export default function StoreSearchView() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.searchInputSection}>
          <SearchInput
            searchValue={searchValue}
            setSearchValue={setSearchValue}
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
    alignItems: "center",
  },
  searchInputSection: {
    width: "100%",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },
});
