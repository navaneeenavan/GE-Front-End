import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import the icon component
import tw from "twrnc";

interface TabBarIconProps {
  iconName: string; // New prop for icon name
  color: string;
  size: number;
  focused: boolean;
  special?: boolean;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({
  iconName,
  color,
  size,
  focused,
  special,
}) => {
  const iconStyle = special
    ? { ...styles.addIcon, backgroundColor: focused ? "#3774f2" : "black" }
    : {};

  return (
    <View style={[styles.iconContainer, iconStyle]}>
      <Icon name={iconName} size={size} color={color} />{" "}
      {/* Use the Icon component with the specified icon name */}
    </View>
  );
};

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const iconColor = isFocused ? "#3774f2" : "gray";
        const iconSize = 24;

        let iconName = "";

        if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "Health") {
          iconName = "favorite";
        } else if (route.name === "Add") {
          iconName = "add";
        } else if (route.name === "Profile") {
          iconName = "person";
        }

        if (!iconName) {
          return null;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tab}
          >
            <TabBarIcon
              iconName={iconName}
              color={iconColor}
              size={iconSize}
              focused={isFocused}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "black",
    borderTopWidth: 0,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  addIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});

export default CustomTabBar;
