import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Schedules from "./Schedules";
import Forum from "./Forum";
import MyPatients from "./MyPatients";
import ChatRoom from "./ChatRoom";
import Profile from "./Profile";
const Tabs = createBottomTabNavigator();

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
        name="Schedules"
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
                <MaterialCommunityIcons
                  name="calendar"
                  size={34}
                  color={color}
                />
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
                <MaterialCommunityIcons
                  name="account-group"
                  size={34}
                  color={color}
                />
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
                <MaterialCommunityIcons name="forum" size={34} color={color} />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="ChatRoom"
        component={ChatRoom}
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
                <MaterialCommunityIcons name="chat" size={34} color={color} />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
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
                <MaterialCommunityIcons
                  name="account"
                  size={34}
                  color={color}
                />
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
