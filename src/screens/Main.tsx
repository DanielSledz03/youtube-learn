import { colors } from "@constants";
import { StyleSheet, View } from "react-native";

export const MainScreen = () => {
  return <View style={styles.screenContainer}></View>;
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
  },
});
