import { SearchInput } from "@components";
import { colors } from "@constants";
import { ScrollView, StyleSheet, View } from "react-native";
import { RootState } from "@store";
import { useSelector } from "react-redux";
import VerticalScrollCards from "src/views/VerticalScrollCards";

export const SearchScreen = () => {
  const searchText = useSelector((state: RootState) => state.search.searchText);
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <SearchInput searchScreen />
      </View>

      {searchText.length > 0 && <VerticalScrollCards title={searchText} />}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
  },

  headerContainer: {
    marginTop: 20,
    marginBottom: 15,
  },
});
