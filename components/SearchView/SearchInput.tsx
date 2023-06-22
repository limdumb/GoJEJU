import { TextInput } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import SearchIcon from "react-native-vector-icons/Fontisto";

interface SearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput(props: SearchProps) {
  return (
    <View style={styles.container}>
      <SearchIcon name="search" size={30} color="#898989" />
      <TextInput
        style={styles.searchInput}
        value={props.searchValue}
        onChangeText={props.setSearchValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDEDED",
    width: "90%",
    height: 45,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 12,
  },
  searchInput: { width: "85%", height: "100%",marginLeft:15, fontSize:16 },
});
