import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tailwind from "twrnc";

const Chatroom = () => {
  return (
    <View style={tailwind`flex-1 justify-center items-center`}>
      <Text>Chatroom</Text>
    </View>
  );
};

export default Chatroom;

const styles = StyleSheet.create({});
