import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen } from "src/screens/Login";
import { stackNavigationScreenOptions } from "./screenOption";
import { RootStackParamList } from "./RootStackParamList.type";
import TabsScreen from "./Tabs";
import { DetailsScreen } from "@screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={stackNavigationScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Tabs" component={TabsScreen} />
        <Stack.Screen name="VideoDetail" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
