import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screenOptions from "./screenOption";
import LoginScreen from "../screens/Login";
import RootStackParamList from "./RootStackParamList.type";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
