import { SearchInput } from "@components";
import { colors } from "@constants";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import SettingsIcon from "@assets/icons/settings-icon.svg";
export const MainScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <SearchInput />
        <TouchableOpacity>
          <SettingsIcon width={32} height={32} />
        </TouchableOpacity>
      </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
});
