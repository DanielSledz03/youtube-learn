import { useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";
import colors from "../constants/colors";
const Logo = require("../../assets/logo.png");
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Login logic here
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
  },

  logo: {
    width: "100%",
    height: 116,
    objectFit: "contain",
  },
});

export default LoginScreen;
