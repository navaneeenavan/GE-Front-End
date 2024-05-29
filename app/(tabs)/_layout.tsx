import { StyleSheet, View } from "react-native";
import React from "react";
import { BottomNavigation } from "react-native-paper";
import Chatroom from "./Chatroom";
import two from "./two";
import Forums from "./Forums";
import TabOneScreen from ".";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const _layout = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "one", title: "home", icon: "home" },
    { key: "two", title: "account", icon: "account" },
    { key: "three", title: "magnify", icon: "magnify" },
    { key: "four", title: "chat", icon: "chat" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    one: TabOneScreen,
    two: two,
    three: Forums,
    four: Chatroom,
  });

  return (
    <BottomNavigation
      labeled={false}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      sceneAnimationType="shifting"
      keyboardHidesNavigationBar={true}
      style={{
        top: -10,
        borderRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        margin: 10,
        backgroundColor: "transparent",
      }}
      renderIcon={({ route, focused, color }) => (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <View
            style={[
              {
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
                width: focused ? 50 : 34,
                height: focused ? 50 : 34,
                backgroundColor: focused ? "#3774f2" : "transparent",
                marginTop: focused ? -10 : -4,
              },
            ]}
          >
            <Icon
              name={route.title || ""}
              size={34}
              color={focused ? "#ffffff" : "#000000"}
            />
          </View>
        </View>
      )}
      barStyle={{
        backgroundColor: "rgba(255,255,255,0.5)",
      }}
    />
  );
};

export default _layout;

const styles = StyleSheet.create({});
