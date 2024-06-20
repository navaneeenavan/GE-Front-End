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
import tw from "twrnc";
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
import { lightBlue100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const Pageslayout = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          borderRadius: 100,
          top: -20,
          left:1,
          width: "97.5%",
          margin:5,
          paddingTop:30
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
                  backgroundColor: focused ? "#3872F7" : "#E8EFEC",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <RectangleStackIcon size={24} color={focused ? "white" :"gray" }  />
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
                  backgroundColor: focused ? "#3872F7" : "#E8EFEC",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <UserGroupIcon size={24} color={focused ? "white" :"gray" }  />
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
                  backgroundColor: focused ? "#3872F7" : "#E8EFEC",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HomeIcon size={24} color={focused ? "white" :"gray" } />
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
                  backgroundColor: focused ? "#3872F7" : "#E8EFEC",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                 <ChatBubbleBottomCenterTextIcon size={24} color={focused ? "white" :"gray" } />
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
                  backgroundColor: focused ? "#3872F7" : "#E8EFEC",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BeakerIcon size={24} color={focused ? "white" :"gray" }  />
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
