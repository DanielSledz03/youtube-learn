import { Image, Linking, StyleSheet, View } from "react-native";
import colors from "../constants/colors";

import { NavigationProp } from "@react-navigation/native";
import { PoppinsText, PrimaryButton } from "@components";
import { RootStackParamList } from "@navigation";

const Logo = require("../../assets/logo.png");
const Icon = require("../../assets/app-icon.png");

interface LoginScreenProps {
  navigation: NavigationProp<RootStackParamList, "Login">;
}

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const handleTermsPress = () => {
    Linking.openURL("https://www.example.com/terms");
  };

  const handlePrivacyPress = () => {
    Linking.openURL("https://www.example.com/privacy");
  };

  const handleButtonPress = () => {
    navigation.navigate("MainScreen");
  };

  return (
    <View style={styles.screenContainer}>
      <Image style={styles.logoImage} source={Logo} />

      <Image source={Icon} />

      <View style={styles.contentContainer}>
        <PoppinsText weight="SemiBold" style={styles.welcomeText}>
          Welcome to the best YouTube-based learning application.
        </PoppinsText>

        <PrimaryButton onPress={handleButtonPress} title="Log in as guest" />

        <PoppinsText style={styles.agreementText}>
          By continuing you agree with{"  \n"}
          <PoppinsText onPress={handleTermsPress} style={styles.linkText}>
            Terms and Conditions
          </PoppinsText>{" "}
          and{" "}
          <PoppinsText onPress={handlePrivacyPress} style={styles.linkText}>
            Privacy Policy
          </PoppinsText>
        </PoppinsText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "space-between",
  },

  logoImage: {
    width: "100%",
    height: 116,
    resizeMode: "contain",
  },

  contentContainer: {
    width: "100%",
    alignItems: "center",
  },

  welcomeText: {
    width: "100%",
    color: colors.white,
    fontSize: 22,
    lineHeight: 24,
  },

  agreementText: {
    fontSize: 13,
    lineHeight: 16,
    color: colors.white,
    textAlign: "center",
  },

  linkText: {
    color: colors.darkBlue,
    textDecorationLine: "underline",
  },
});
