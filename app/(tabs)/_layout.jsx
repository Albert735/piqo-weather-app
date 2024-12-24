import { Tabs } from "expo-router";
import TabBar from "../../components/TabBar";

export default function _layout() {
  return (
    <Tabs
      options={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen name="home/index" options={{ headerShown: false }} />
      <Tabs.Screen name="explore/index" options={{ headerShown: false }} />
      <Tabs.Screen name="search/index" options={{ headerShown: false }} />
    </Tabs>
  );
}
