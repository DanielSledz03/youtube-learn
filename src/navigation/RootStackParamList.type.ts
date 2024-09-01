import { TabsParamList } from "./Tabs";

export type RootStackParamList = {
  Login: undefined;
  VideoDetail: { videoId: string };
  Settings: undefined;
  Tabs: undefined;
};

export type CombinedParamList = RootStackParamList & TabsParamList;
