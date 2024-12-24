import { View, Platform, StyleSheet } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  const icons = {
    "home/index": (props) => <Octicons name="home" size={26} {...props} />,
    "explore/index": (props) => (
      <MaterialIcons name="explore" size={26} {...props} />
    ),
    "search/index": (props) => <Octicons name="search" size={26} {...props} />,
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const IconComponent = icons[route.name];

        if (!IconComponent) {
          console.log("No icon defined for route:", route.name);
        }

        return (
          <PlatformPressable
            style={styles.containerItems}
            href={buildHref(route.name, route.params)}
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {IconComponent ? (
              IconComponent({
                color: isFocused ? "#000000" : "#DBE1E3",
              })
            ) : (
              <Text style={{ color: "red" }}>Icon Missing</Text> // ✅ Fallback for missing icons
            )}
          </PlatformPressable>
        );
      })}
    </View>
  );
}
export default MyTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    bottom: 25,
    left: 0,
    right: 0,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  containerItems: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    backgroundColor: "transparent",
  },
});
