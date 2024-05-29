import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tailwind from "twrnc";

const two = () => {
  return (
    <View style={tailwind`flex-1 justify-center items-center`}>
      <Text>two</Text>
    </View>
  );
};

export default two;

const styles = StyleSheet.create({});
