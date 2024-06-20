import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ArrowUpRightIcon,
  BellAlertIcon,
  BoltIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CubeTransparentIcon,
  UsersIcon,
} from "react-native-heroicons/outline";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "@/components/Themed";
import { router } from "expo-router";

type RootStackParamList = {
  TabOneScreen: undefined;
  Layout2: { screen: string };
  ChatRoom: undefined;
};

type TabOneScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "TabOneScreen"
>;

export default function TabOneScreen() {
  const navigation = useNavigation<TabOneScreenNavigationProp>();

  return (
    <View style={tw`flex-1 bg-[#F2F2F2] mt-5 mx-2`}>
      <SafeAreaView style={tw`px-0.5`}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={tw`flex flex-row justify-between bg-[#f2f2f2] gap-1`}>
            <View
              style={tw`h-16 w-56 bg-white rounded-full flex flex-row items-center`}
            >
              <View style={tw`h-16 w-16 border rounded-full bg-black`} />
              <Text style={tw`text-black ml-4 text-md`}>Dr Henry Cavil</Text>
              <TouchableOpacity style={tw`ml-3`}>
                <ChevronDownIcon size={20} color={"#3774f2"} />
              </TouchableOpacity>
            </View>
            <View style={tw`flex flex-row gap-1`}>
              <TouchableOpacity
                style={tw`h-16 w-16 bg-white rounded-full justify-center items-center`}
                onPress={() => {
                  router.push("/Notifications");
                }}
              >
                <BellAlertIcon size={20} color={"#3774f2"} />
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`h-16 w-16 bg-white rounded-full justify-center items-center`}
                onPress={() => {
                  router.push("/Chatroom");
                }}
              >
                <MaterialCommunityIcons
                  name="chat"
                  size={30}
                  color={"#3774f2"}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={tw`mt-10 text-5xl ml-7 text-black`}>
            Hello Doctor!
          </Text>
          <View
            style={tw`flex w-11.5/12 h-20 rounded-full bg-white mt-5 py-6 flex-row justify-between ml-2`}
          >
            <Text style={tw`text-lg ml-7 text-black`}>Doctor ID</Text>
            <View style={tw`flex flex-row items-center space-x-2 ml-5 mr-5`}>
              <Text style={tw`text-lg text-black`}>1234567890</Text>
              <TouchableOpacity>
                <ChevronRightIcon size={20} color={"#3774f2"} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={tw`px-2`}>
            <View style={tw`flex flex-row justify-between mt-5`}>
              <TouchableOpacity
                style={tw`flex-1 h-50 rounded-3xl bg-[#f2f2f2]`}
                onPress={() => {
                  navigation.push("Layout2", { screen: "MyPatients" });
                }}
              >
                <View style={tw`w-3/5 bg-white h-40 rounded-3xl px-2`}>
                  <View style={tw`flex flex-row justify-between mt-5 ml-36`}>
                    <UsersIcon size={35} color={"#3774f2"} />
                  </View>
                  <Text style={tw`text-lg mt-14 ml-3 font-semibold text-black`}>
                    My Patients
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`flex-1 h-50 rounded-3xl bg-[#f2f2f2] ml-5`}
                onPress={() => {
                  navigation.navigate("Layout2", { screen: "Forum" });
                }}
              >
                <View style={tw`w-2/5 bg-white h-40 rounded-3xl`}>
                  <View style={tw`mt-5 ml-5`}>
                    <CubeTransparentIcon size={35} color={"#3774f2"} />
                  </View>
                  <Text style={tw`text-lg mt-14 ml-7 font-semibold text-black`}>
                    Forum
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={tw`flex flex-row mt-2 gap-2`}>
              <TouchableOpacity
                style={tw`flex-1`}
                onPress={() => {
                  navigation.navigate("Layout2", { screen: "Schedule" });
                }}
              >
                <View style={tw`w-3/5 h-10 rounded-3xl bg-[#3872F7]`}>
                  <View style={tw`flex-row items-center justify-center mt-5 mx-auto h-12 w-10 bg-white rounded-full`}>
                    <ArrowUpRightIcon size={35} color={"#3774f2"} />
                  </View>
                  <View style={tw`flex-row justify-between px-4 mt-4`}>
                    <CalendarIcon size={35} color={"#ffffff"} />
                    <View style={tw`h-7 w-7 bg-red-500 rounded-full justify-center items-center`}>
                      <Text style={tw`text-white text-lg`}>7</Text>
                    </View>
                  </View>
                  <Text style={tw`text-white text-lg mt-1 ml-4`}>
                    Schedules
                  </Text>
                  <Text style={tw`text-white text-xs ml-4`}>
                    There are few pending Appointments
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`flex-1 ml-2`}
                onPress={() => {
                  navigation.navigate("Layout2", { screen: "Assistant" });
                }}
              >
                <View style={tw`h-50 rounded-3xl bg-white p-5 justify-between`}>
                  <BoltIcon size={35} color={"#3774f2"} />
                  <Text style={tw`text-black text-lg font-semibold mt-4`}>
                    Assistant
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
