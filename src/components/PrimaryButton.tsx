import { StyleSheet, TouchableOpacity } from "react-native";
import { PoppinsText } from "./PoppinsText";
import colors from "../constants/colors";

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
}

export const PrimaryButton = ({ title, ...props }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <PoppinsText style={styles.text} weight="SemiBold">
        {title}
      </PoppinsText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 50,
    backgroundColor: colors.darkBlue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 30,
  },

  text: {
    color: colors.white,
    fontSize: 16,
  },
});
