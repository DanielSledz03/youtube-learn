import { SearchInput } from "@components";
import { colors } from "@constants";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import SettingsIcon from "@assets/icons/settings-icon.svg";
import HorizontalScrollCards from "src/views/HorizontalScrollCards";

const cardData = [
  {
    id: "1",
    title: "React Native in 100 seconds",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "12.08.2024",
    imageUrl: "https://picsum.photos/seed/picsum/1200/300",
  },
  {
    id: "2",
    title: "React Native in 100 seconds",
    description: "Learn React Native quickly in this brief overview...",
    date: "12.08.2024",
    imageUrl: "https://picsum.photos/seed/picsum/1200/300",
  },
];
export const MainScreen = () => {
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <SearchInput />
        <TouchableOpacity>
          <SettingsIcon width={32} height={32} />
        </TouchableOpacity>
      </View>
      <HorizontalScrollCards title="React Native" data={cardData} />
      <HorizontalScrollCards title="React" data={cardData} />
      <HorizontalScrollCards title="Typescript" data={cardData} />
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
