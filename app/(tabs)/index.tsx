import { Text, View } from "@/components/Themed";
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
  EllipsisHorizontalIcon,
  UsersIcon,
} from "react-native-heroicons/outline";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  TabOneScreen: undefined;
  Layout2: undefined;
};

type TabOneScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "TabOneScreen"
>;

export default function TabOneScreen() {
  const navigation = useNavigation<TabOneScreenNavigationProp>();
  return (
    <View style={tw`flex-1 bg-[#F2F2F2] mt-5`}>
      <SafeAreaView style={tw`px-0.5`}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={tw`flex flex-row justify-between bg-[#f2f2f2] gap-1`}>
            <View
              style={tw`h-16 w-56 bg-white rounded-full flex flex-row items-center`}
            >
              <View style={tw`h-16 w-16 border-1 rounded-full bg-black`} />
              <Text style={tw`text-black ml-4 text-md`}>Dr Henry Cavil</Text>
              <TouchableOpacity style={tw`text-black text-xl ml-3`}>
                <ChevronDownIcon size={20} color={"#3774f2"} />
              </TouchableOpacity>
            </View>
            <View style={tw`flex flex-row bg-[#f2f2f2] gap-1`}>
              <TouchableOpacity
                style={tw`h-16 w-16 bg-white rounded-full justify-center items-center flex flex-row`}
              >
                <BellAlertIcon size={20} color={"#3774f2"} />
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`h-16 w-16 bg-white rounded-full justify-center items-center flex flex-row`}
              >
                <EllipsisHorizontalIcon size={45} color={"#3774f2"} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={tw`mt-10 text-5xl ml-7 text-[#000000]`}>
            Hello Doctor !
          </Text>
          <View
            style={tw`flex w-11.5/12 h-20 rounded-l-full rounded-r-full bg-white mt-5 py-6  flex-row text-black justify-between ml-2`}
          >
            <Text style={tw`text-lg ml-7 text-black`}>Doctor ID</Text>
            <View
              style={tw`flex flex-row space-x-2 items-center ml-5 mr-5 bg-white justify-between`}
            >
              <Text style={tw`text-lg text-black`}>1234567890</Text>
              <TouchableOpacity>
                <ChevronRightIcon size={20} color={"#3774f2"} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={tw`px-2 bg-[#f2f2f2]`}>
            <View style={tw`flex flex-row space-x-2 mt-3 bg-[#f2f2f2] gap-2`}>
              <View style={tw`w-3/5 bg-white h-40 rounded-[50px] px-2`}>
                <View
                  style={tw`flex flex-row justify-between ml-36 mt-5 bg-white`}
                >
                  <UsersIcon size={35} color={"#3774f2"} />
                </View>
                <Text style={tw`text-lg mt-14 ml-3 font-semi-bold text-black`}>
                  My Patients
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 50,
                  backgroundColor: "#f2f2f2",
                  flexDirection: "column",
                }}
                onPress={() => {
                  navigation.navigate("Layout2");
                }}
              >
                <View style={tw`w-2/5 bg-white h-40 rounded-[50px]`}>
                  <View style={tw`mt-5 ml-5 bg-white`}>
                    <CubeTransparentIcon size={35} color={"#3774f2"} />
                  </View>

                  <Text
                    style={tw`text-lg  mt-14 ml-7 font-semi-bold text-black`}
                  >
                    Forum
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={tw`flex flex-row bg-[#f2f2f2] mt-2 gap-2`}>
              <View
                style={{
                  width: "60%",
                  height: 200,
                  borderRadius: 50,
                  marginTop: 5,
                  backgroundColor: "#3872F7",
                  flexDirection: "column",
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginHorizontal: 10,
                    marginTop: 15,
                    marginLeft: 140,
                    backgroundColor: "white",
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                  }}
                >
                  <ArrowUpRightIcon size={35} color={"#3774f2"} />
                </TouchableOpacity>
                <View
                  style={{
                    justifyContent: "space-between",
                    width: "100%",
                    flexDirection: "row",
                    padding: 15,
                    backgroundColor: "#3872F7",
                  }}
                >
                  <CalendarIcon size={35} color={"#ffffff"} />
                  <View
                    style={{
                      backgroundColor: "red",
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      marginRight: 10,
                      marginTop: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                      }}
                    >
                      7
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    marginLeft: 13,
                    marginTop: -12,
                  }}
                >
                  Schedules
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 12.5,
                    marginLeft: 16,
                  }}
                >
                  There are few pending Appointments
                </Text>
              </View>

              <View
                style={{
                  width: "40%",
                  height: 200,
                  borderRadius: 50,

                  backgroundColor: "#f2f2f2",
                  flexDirection: "column",
                }}
              >
                <View
                  style={{
                    height: 175,
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: 50,
                    marginTop: 7.5,
                    padding: 20,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-between",
                      backgroundColor: "white",
                      marginLeft: 5,
                      borderRadius: 50,
                    }}
                  >
                    <BoltIcon size={35} color={"#3774f2"} />
                  </View>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 18,
                      marginLeft: 10,
                      marginTop: -20,
                      fontFamily: "sans-serif",
                    }}
                  >
                    Assistant
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
