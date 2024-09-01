import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainScreen } from "src/screens/Main";
import { tabNavigationScreenOptions } from "./screenOption";
import { SearchScreen } from "@screens";

export type TabsParamList = {
  MainScreen: undefined;
  SearchScreen: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

function TabsScreen() {
  return (
    <Tab.Navigator screenOptions={tabNavigationScreenOptions}>
      <Tab.Screen name="MainScreen" component={MainScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default TabsScreen;
