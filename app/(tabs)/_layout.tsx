import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import HomeScreen from ".";
import {
  SafeAreaFrameContext,
  SafeAreaView,
} from "react-native-safe-area-context";
import {
  ArrowUpRightIcon,
  BellAlertIcon,
  BellIcon,
  BoltIcon,
  CalendarIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CubeTransparentIcon,
  EllipsisHorizontalIcon,
  PresentationChartBarIcon,
  UserIcon,
  UsersIcon,
} from "react-native-heroicons/outline";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View className="flex-1 bg-[#F2F2F2] mt-5">
      <SafeAreaView className="px-5">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex flex-row justify-between">
            <View className="h-16 w-56 bg-white rounded-full flex flex-row items-center">
              <View className="h-16 w-16 border-1 rounded-full bg-black" />
              <Text className="text-black ml-4 text-md">Dr Henry Cavil</Text>
              <TouchableOpacity className="text-black text-xl ml-3">
                <ChevronDownIcon size={20} />
              </TouchableOpacity>
            </View>
            <View className="flex flex-row space-x-2">
              <TouchableOpacity className="h-16 w-16 bg-white rounded-full justify-center items-center flex flex-row">
                <BellAlertIcon size={30} />
              </TouchableOpacity>
              <TouchableOpacity className="h-16 w-16 bg-white rounded-full justify-center items-center flex flex-row">
                <EllipsisHorizontalIcon size={45} />
              </TouchableOpacity>
            </View>
          </View>
          <Text className="mt-10 text-5xl ml-2">Hello Doctor !</Text>
          <View className="flex w-full h-20 rounded-l-full rounded-r-full bg-white mt-5 py-6  flex-row text-black justify-between  ">
            <Text className="text-lg ml-7">Doctor ID</Text>
            <View className="flex flex-row space-x-2 items-center ml-5 mr-5">
              <Text className="text-lg">1234567890</Text>
              <TouchableOpacity>
                <ChevronRightIcon size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View className="px-2">
            <View className="flex flex-row space-x-2 mt-3">
              <View className="w-3/5 bg-white h-40 rounded-[50px] px-5">
                <View className="flex flex-row justify-between ml-36 mt-5">
                  <UsersIcon size={35} />
                </View>
                <Text className="text-lg mt-14 ml-3 font-semi-bold">
                  My Patients
                </Text>
              </View>
              <View className="w-2/5 bg-white h-40 rounded-[50px] ">
                <View className="mt-5 ml-5">
                <CubeTransparentIcon size={35} />
                </View>
     
              <Text className="text-lg  mt-14 ml-7 font-semi-bold">
                  Forum
                </Text>
              </View>
            </View>
            <View className="flex flex-row ">
              <View className="w-3/5  h-80 rounded-[50px] mt-3 bg-[#3872F7] flex flex-col ">
                <TouchableOpacity
                  className="h-14 w-14 mt-7 ml-36 bg-white rounded-full flex justify-center items-center"
                  size={35}
                >
                  <ArrowUpRightIcon />
                </TouchableOpacity>
                <View className="mt-20 px-5 flex flex-row justify-between">
                  <CalendarIcon color={"white"} size={35} />
                  <View className="h-8 w-8 bg-red-500 rounded-full flex justify-center items-center">
                    <Text className="text-white">7</Text>
                  </View>
                </View>
                <View className="px-5 mt-5">
                  <Text className="text-white text-xl font-bold">
                    Schedules
                  </Text>
                  <Text className="text-white text-md mt-1">
                    Medical Appointments that are pending{" "}
                  </Text>
                </View>
              </View>
              <View className="flex flex-col w-full ml-2">
                <View className="w-2/5 bg-white h-36 rounded-[50px] mt-3">
                <View className="ml-5 mt-5">
                  <BoltIcon size={35} />
                </View>
                  
                  <Text className="text-lg  mt-12 ml-7 font-semi-bold">
                  Assistant
                </Text>
                </View>
                <View className="w-2/5 bg-white h-36 rounded-[50px] mt-3">
                <View className="ml-6 mt-5 flex flex-row">
                  <PresentationChartBarIcon size={35} />
                 
                </View>
                  
                  <Text className="text-lg  mt-12 ml-7 font-semi-bold">
                  Diagnosis
                </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
