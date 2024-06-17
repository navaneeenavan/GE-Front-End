import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabOneScreen from ".";
import PagesLayout from "../pages/_layout";

type RootStackParamList = {
  TabOneScreen: undefined;
  Layout2: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Layout = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabOneScreen" component={TabOneScreen} />
      <Stack.Screen name="Layout2" component={PagesLayout} />
    </Stack.Navigator>
  );
};

export default Layout;

const styles = StyleSheet.create({});
