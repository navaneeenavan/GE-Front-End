import { Tabs } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import HomeScreen from ".";
import { SafeAreaView } from "react-native-safe-area-context";
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
import tw from "twrnc";
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function TabLayout() {
  const navigation = useNavigation()
  return (
    <View style={tw`flex-1 bg-[#F2F2F2] mt-5`}>
      <SafeAreaView style={tw`px-5`}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={tw`flex flex-row justify-between`}>
            <View
              style={tw`h-16 w-56 bg-white rounded-full flex flex-row items-center`}
            >
              <View style={tw`h-16 w-16 border-1 rounded-full bg-black`} />
              <Text style={tw`text-black ml-4 text-md`}>Dr Henry Cavil</Text>
              <TouchableOpacity style={tw`text-black text-xl ml-3`}>
                <ChevronDownIcon size={20} />
              </TouchableOpacity>
            </View>
            <View style={tw`flex flex-row gap-2`}>
            <TouchableOpacity
                style={tw`h-16 w-16 bg-white rounded-full justify-center items-center flex flex-row`}
                onPress={() => {
                  router.push("/Notifications");
                }}
              >
                <BellAlertIcon size={30} />
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`h-16 w-16 bg-white rounded-full justify-center items-center flex flex-row`}
              >
                  <MaterialCommunityIcons
                  name="chat"
                  size={30}
                  color={"#3774f2"}
                  onPress={() => {
                    router.push("/Chatroom");
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={tw`mt-10 text-5xl ml-2`}>Hello Doctor !</Text>
          <View
            style={tw`flex w-full h-20 rounded-l-full rounded-r-full bg-white mt-5 py-6 flex-row text-black justify-between`}
          >
            <Text style={tw`text-lg ml-7`}>Doctor ID</Text>
            <View style={tw`flex flex-row space-x-2 items-center ml-5 mr-5`}>
              <Text style={tw`text-lg`}>#21</Text>
              <TouchableOpacity>
                <ChevronRightIcon size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={tw`px-2`}>
            <View style={tw`flex flex-row space-x-2 mt-3`}>
              <TouchableOpacity style={tw`w-3/5 bg-white h-40 rounded-[50px] px-5`}  onPress={()=>{
                  navigation.navigate("Layout2",{
                    screen:"MyPatients"
                  })
                }}>
                <View style={tw`flex flex-row justify-between ml-36 mt-5`}>
                  <UsersIcon size={35} />
                </View>
                <Text style={tw`text-lg mt-14 ml-3 font-semi-bold`}>
                  My Patients
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`w-2/5 bg-white h-40 rounded-[50px] ml-2`}  onPress={()=>{
                  navigation.navigate("Layout2",{
                    screen:"Forum"
                  })
                }}>
                <View style={tw`mt-5 ml-5`}>
                  <CubeTransparentIcon size={35} />
                </View>
                <Text style={tw`text-lg mt-14 ml-7 font-semi-bold`}>Forum</Text>
              </TouchableOpacity>
            </View>
            <View style={tw`flex flex-row`}>
              <View
                style={tw`w-3/5 h-80 rounded-[50px] mt-3 bg-[#3872F7] flex flex-col`}
              >
                <TouchableOpacity
                  style={tw`h-14 w-14 mt-7 ml-36 bg-white rounded-full flex justify-center items-center`}
                  onPress={()=>{
                    navigation.navigate("Layout2",{
                      screen:"Schedule"
                    })
                  }}
                >
                  <ArrowUpRightIcon size={35} />
                </TouchableOpacity>
                <View style={tw`mt-20 px-5 flex flex-row justify-between`}>
                  <CalendarIcon color={"white"} size={35} />
                  <View
                    style={tw`h-8 w-8 bg-red-500 rounded-full flex justify-center items-center`}
                  >
                    <Text style={tw`text-white`}>7</Text>
                  </View>
                </View>
                <View style={tw`px-5 mt-5`}>
                  <Text style={tw`text-white text-xl font-bold`}>
                    Schedules
                  </Text>
                  <Text style={tw`text-white text-md mt-1`}>
                    Medical Appointments that are pending
                  </Text>
                </View>
              </View>
              <View style={tw`flex flex-col w-full ml-2`}>
                <TouchableOpacity style={tw`w-2/5 bg-white h-36 rounded-[50px] mt-6`} >
                  <View style={tw`ml-5 mt-5`}>
                    <BoltIcon size={35} />
                  </View>
                  <Text style={tw`text-lg mt-12 ml-7 font-semi-bold`}>
                    Assistant
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`w-2/5 bg-white h-36 rounded-[50px] mt-3`} onPress={()=>{
                  navigation.navigate("Layout2",{
                    screen:"Diagnosis"
                  })
                }}>
                  <View style={tw`ml-6 mt-5 flex flex-row`}>
                    <PresentationChartBarIcon size={35} />
                  </View>
                  <Text style={tw`text-lg mt-12 ml-7 font-semi-bold`}>
                    Diagnosis
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
