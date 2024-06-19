import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const _layout = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="Careplans" />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
