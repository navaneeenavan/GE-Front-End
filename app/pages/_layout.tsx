import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Schedules from "./Schedules";
import Forum from "./Forum";
import MyPatients from "./MyPatients";
import Diagnosis from "./Diagnosis";
import HomePage from "./HomePage";

interface BottomTabParamList {
  Home: undefined;
  MyPatients: undefined;
  Schedule: undefined;
  Forum: undefined;
  Profile: undefined;
}

const Tabs = createBottomTabNavigator();
import {
  HomeIcon,
  UserGroupIcon,
  ChatBubbleBottomCenterTextIcon,
  BeakerIcon,
  RectangleStackIcon,
} from "react-native-heroicons/outline";

const Pageslayout = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          borderRadius: 50,
          top: -15,
          width: "97.5%",
          marginLeft: 5,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="Schedule"
        component={Schedules}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? "#b8dfb4" : "#E8EFEC",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <RectangleStackIcon size={34} color={color} />
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="MyPatients"
        component={MyPatients}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? "#b8dfb4" : "#E8EFEC",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <UserGroupIcon size={34} color={color} />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? "#b8dfb4" : "#E8EFEC",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HomeIcon size={34} color={color} />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Forum"
        component={Forum}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? "#b8dfb4" : "#E8EFEC",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ChatBubbleBottomCenterTextIcon size={34} color={color} />
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={Diagnosis}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? "#b8dfb4" : "#E8EFEC",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BeakerIcon size={34} color={color} />
              </View>
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default Pageslayout;

const styles = StyleSheet.create({});
