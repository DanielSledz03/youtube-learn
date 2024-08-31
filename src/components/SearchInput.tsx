import { colors } from "@constants";
import { StyleSheet, TextInput, View } from "react-native";

import SearchIcon from "@assets/icons/search-icon.svg";
import { useState } from "react";

export const SearchInput = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.searchInputContainer}>
      <SearchIcon width={24} height={24} />
      <TextInput
        onChangeText={setSearchText}
        style={styles.input}
        value={searchText}
        placeholder="Search videos"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInputContainer: {
    width: "85%",
    height: 44,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.darkBlue,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: colors.darkBlue,
    paddingHorizontal: 16,
    fontFamily: "Poppins-Regular",
  },

  searchIcon: {
    width: 50,
    height: 50,
  },
});
