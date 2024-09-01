import { colors } from "@constants";
import { StyleSheet, TextInput, View } from "react-native";
import SearchIcon from "@assets/icons/search-icon.svg";
import { useSelector, useDispatch } from "react-redux";
import { RootState, setSearchText } from "@store";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { CombinedParamList } from "@navigation";

interface SearchInputProps {
  searchScreen?: boolean;
}

export const SearchInput = ({ searchScreen = false }: SearchInputProps) => {
  const dispatch = useDispatch();
  const searchText = useSelector((state: RootState) => state.search.searchText);
  const navigate = useNavigation<NavigationProp<CombinedParamList>>();

  const handleChangeText = (text: string) => {
    dispatch(setSearchText(text));
  };

  const handleSubmit = () => {
    if (!searchText) {
      navigate.navigate("SearchScreen");
    }
  };

  return (
    <View
      style={[
        styles.searchInputContainer,
        searchScreen ? { width: "100%" } : { width: "85%" },
      ]}
    >
      <SearchIcon width={24} height={24} />
      <TextInput
        onChangeText={handleChangeText}
        style={styles.input}
        value={searchText}
        placeholder="Search videos"
        onSubmitEditing={handleSubmit}
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
