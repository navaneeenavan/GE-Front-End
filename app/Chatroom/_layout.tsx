import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const ChatRoomLayout = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="ChatRoomDetailScreen" />
    </Stack>
  );
};

export default ChatRoomLayout;

const styles = StyleSheet.create({});
