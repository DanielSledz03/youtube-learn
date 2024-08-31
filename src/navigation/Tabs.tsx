import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainScreen } from "src/screens/Main";
import { tabNavigationScreenOptions } from "./screenOption";

export type TabsParamList = {
  MainScreen: undefined;
  SearchScreen: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

function TabsScreen() {
  return (
    <Tab.Navigator screenOptions={tabNavigationScreenOptions}>
      <Tab.Screen name="MainScreen" component={MainScreen} />
      <Tab.Screen name="SearchScreen" component={MainScreen} />
    </Tab.Navigator>
  );
}

export default TabsScreen;
