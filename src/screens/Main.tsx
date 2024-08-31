import { SearchInput } from "@components";
import { colors } from "@constants";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import SettingsIcon from "@assets/icons/settings-icon.svg";
import HorizontalScrollCards from "src/views/HorizontalScrollCards";

export const MainScreen = () => {
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <SearchInput />
        <TouchableOpacity>
          <SettingsIcon width={32} height={32} />
        </TouchableOpacity>
      </View>
      <HorizontalScrollCards title="React Native" />
      <HorizontalScrollCards title="React" />
      <HorizontalScrollCards title="Typescript" />
      <HorizontalScrollCards title="Javascript" />
    </ScrollView>
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
