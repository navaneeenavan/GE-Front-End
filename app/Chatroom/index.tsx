import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Appbar } from "react-native-paper";

const index = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Chatroom" />
      </Appbar.Header>
      <View>
        <Text>index</Text>
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
