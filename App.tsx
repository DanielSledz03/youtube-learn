import { useEffect } from "react";
import { Platform, SafeAreaView } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Navigation } from "@navigation";
import { fonts } from "@constants";

function App() {
  const [loaded, error] = useFonts(fonts);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: Platform.OS === "android" ? 50 : 0 }}
    >
      <StatusBar style="light" />
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
