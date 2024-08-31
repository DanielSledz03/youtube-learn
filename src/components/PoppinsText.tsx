import React from "react";
import { Text, TextProps } from "react-native";

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

const PoppinsText: React.FC<PoppinsTextProps> = ({
  style,
  weight = "Regular",
  ...props
}) => {
  return (
    <Text style={[style, { fontFamily: `Poppins-${weight}` }]} {...props} />
  );
};

export default PoppinsText;
