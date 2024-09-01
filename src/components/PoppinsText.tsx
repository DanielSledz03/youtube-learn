import { colors } from "@constants";
import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";

interface PoppinsTextProps extends TextProps {
  weight?:
    | "Black"
    | "BlackItalic"
    | "Bold"
    | "BoldItalic"
    | "ExtraBold"
    | "ExtraBoldItalic"
    | "ExtraLight"
    | "ExtraLightItalic"
    | "Italic"
    | "Light"
    | "LightItalic"
    | "Medium"
    | "MediumItalic"
    | "Regular"
    | "SemiBold"
    | "SemiBoldItalic"
    | "Thin"
    | "ThinItalic";
}

export const PoppinsText: React.FC<PoppinsTextProps> = ({
  style,
  weight = "Regular",
  ...props
}) => {
  return (
    <Text
      style={[styles.text, style, { fontFamily: `Poppins-${weight}` }]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.darkBlue,
  },
});
