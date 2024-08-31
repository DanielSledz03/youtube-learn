import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import MainScreenIcon from "@assets/icons/home-icon.svg";
import MainScreenIconInactive from "@assets/icons/home-icon-white.svg";
import SearchScreenIcon from "@assets/icons/search-icon.svg";
import SearchScreenIconInactive from "@assets/icons/search-icon-white.svg";
import { colors } from "@constants";

export const stackNavigationScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const tabNavigationScreenOptions = ({
  route,
}: {
  route: { name: string };
}): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarIcon: ({ focused }) => {
    if (route.name === "MainScreen") {
      return focused ? (
        <MainScreenIcon width={27} height={28} />
      ) : (
        <MainScreenIconInactive width={27} height={28} />
      );
    } else if (route.name === "SearchScreen") {
      return focused ? (
        <SearchScreenIcon width={27} height={28} />
      ) : (
        <SearchScreenIconInactive width={27} height={28} />
      );
    }
  },
  tabBarActiveTintColor: colors.darkBlue,
  tabBarInactiveTintColor: colors.white,
  tabBarStyle: {
    backgroundColor: colors.lightBlue,
    paddingBottom: 10,
    height: 72,
  },
  tabBarLabelStyle: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  tabBarLabel: route.name === "MainScreen" ? "Home" : "Search",
});
