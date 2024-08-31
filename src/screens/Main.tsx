import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";

const MainScreen = () => {
  return <View style={styles.screenContainer}></View>;
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    paddingHorizontal: 30,
  },
});

export default MainScreen;
