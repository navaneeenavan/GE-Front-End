import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
import tw from "twrnc";
import { ArrowUpRightIcon } from "react-native-heroicons/outline";
import { router } from "expo-router";
import { BoltIcon } from "react-native-heroicons/outline";

const Stack = createNativeStackNavigator();

const appointments = [
  {
    id: "1",
    status: "SOON",
    title: "Clinic visit appointment: cardiology",
    date: "06/20/24",
    time: "10:15 AM",
    doctor: {
      name: "Ahmed El Sayed",
      specialization: "Cardiologist, PhD, MD",
    },
    est: "Next Week",
  },
  {
    id: "2",
    status: "NEXT WEEK",
    title: "Online consultation: Blood test results",
    date: "06/27/24",
    time: "11:30 AM",
    doctor: {
      name: "Sharif Allee",
      specialization: "Therapist, PhD",
    },
    est: "Next Week",
  },
  {
    id: "3",
    status: "PAST",
    title: "Follow-up: General health check",
    date: "06/13/24",
    time: "09:00 AM",
    doctor: {
      name: "Maria Gomez",
      specialization: "General Practitioner, MD",
    },
    est: "Next Week",
  },
  {
    id: "4",
    status: "PAST",
    title: "Dental check-up",
    date: "06/10/24",
    time: "01:30 PM",
    doctor: {
      name: "John Smith",
      specialization: "Dentist, DDS",
    },
    est: "Next Week",
  },
  {
    id: "5",
    status: "SOON",
    title: "Eye examination",
    date: "06/21/24",
    time: "03:00 PM",
    doctor: {
      name: "Lucy Brown",
      specialization: "Ophthalmologist, MD",
    },
    est: "Next Week",
  },
  {
    id: "6",
    status: "NEXT WEEK",
    title: "Physical therapy session",
    date: "06/28/24",
    time: "10:00 AM",
    doctor: {
      name: "Kevin White",
      specialization: "Physical Therapist, DPT",
    },
    est: "Next Week",
  },
  {
    id: "7",
    status: "PAST",
    title: "Nutrition consultation",
    date: "06/12/24",
    time: "12:00 PM",
    doctor: {
      name: "Sophia Lee",
      specialization: "Dietitian, PhD",
    },
    est: "Next Week",
  },
  {
    id: "8",
    status: "SOON",
    title: "MRI scan",
    date: "06/23/24",
    time: "02:15 PM",
    doctor: {
      name: "Mohammed Ali",
      specialization: "Radiologist, MD",
    },
    est: "Next Week",
  },
  {
    id: "9",
    status: "NEXT WEEK",
    title: "Dermatology consultation",
    date: "06/30/24",
    time: "04:00 PM",
    doctor: {
      name: "Emily Davis",
      specialization: "Dermatologist, MD",
    },
    est: "Next Week",
  },
  {
    id: "10",
    status: "PAST",
    title: "ENT specialist consultation",
    date: "06/09/24",
    time: "11:00 AM",
    doctor: {
      name: "James Wilson",
      specialization: "ENT Specialist, MD",
    },
    est: "Next Week",
  },
];

type Appointment = {
  id: string;
  status: string;
  title: string;
  date: string;
  time: string;
  doctor: {
    name: string;
    specialization: string;
  };
};

const AppointmentCard = ({ appointment }: { appointment: Appointment }) => (
  <View style={tw`bg-white rounded-2xl p-4 mb-4 shadow gap-5`}>
    <View
      style={tw`border border-[#3872F7] rounded-full p-3 w-25 item-center text-center  py-1 mb-3`}
    >
      <Text style={tw`text-[#3872F7]`}>{appointment.est}</Text>
    </View>
    <Text style={tw`text-lg font-bold mb-2`}>{appointment.title}</Text>
    <View style={tw`flex-row items-center mb-2 gap-10`}>
      <View style={tw`flex flex-col`}>
        <Text style={tw`text-xs text-gray-600 mr-4`}>DATE</Text>
        <Text style={tw`text-base text-black mr-6 font-semibold text-2xl`}>
          {appointment.date}
        </Text>
      </View>
      <View style={tw`flex flex-col`}>
        <Text style={tw`text-xs text-gray-600 mr-4`}>TIME</Text>
        <Text style={tw`text-base text-black mr-6 font-semibold text-2xl`}>
          {appointment.time}
        </Text>
      </View>
    </View>
    <View style={tw`border border-gray-200 px-5`}></View>
    <View style={tw`flex-row items-center mb-2`}>
      <Ionicons name="person-circle" size={40} color="gray" />
      <View style={tw`flex-1 ml-4`}>
        <Text style={tw`text-base font-bold`}>{appointment.doctor.name}</Text>
        <Text style={tw`text-xs text-gray-600`}>
          {appointment.doctor.specialization}
        </Text>
      </View>
      <TouchableOpacity
        style={tw`bg-blue-500 p-4  mx-[5%] rounded-full  ml-10  flex-row justify-center items-center gap-2`}
        // onPress={() => router.push({pathname: "/Diagnosis", params: patient})}
      >
        <ArrowUpRightIcon size={20} color={"white"} />
      </TouchableOpacity>
    </View>
  </View>
);

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Upcoming");

  const filteredAppointments = appointments.filter((appointment) =>
    selectedTab === "Upcoming"
      ? appointment.status !== "PAST"
      : appointment.status === "PAST"
  );

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Appointments" />
        <TouchableOpacity
          onPress={() => {
            router.push("/SmartAssistant");
          }}
          style={tw`mr-3`}
        >
          <BoltIcon size={24} color="black" />
        </TouchableOpacity>
      </Appbar.Header>
      <View style={tw`flex-1 bg-gray-100`}>
        <View style={tw`flex-row justify-around py-2 bg-white`}>
          <TouchableOpacity
            style={[
              tw`py-2 px-4 rounded-full`,
              selectedTab === "Upcoming" && tw`bg-blue-500`,
            ]}
            onPress={() => setSelectedTab("Upcoming")}
          >
            <Text
              style={[
                tw`text-base font-bold`,
                selectedTab === "Upcoming" && tw`text-white`,
              ]}
            >
              Upcoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tw`py-2 px-4 rounded-full`,
              selectedTab === "History" && tw`bg-blue-500`,
            ]}
            onPress={() => setSelectedTab("History")}
          >
            <Text
              style={[
                tw`text-base font-bold`,
                selectedTab === "History" && tw`text-white`,
              ]}
            >
              History
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={filteredAppointments}
          renderItem={({ item }) => <AppointmentCard appointment={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={tw`p-4`}
        />
      </View>
    </>
  );
};

const Schedules = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default Schedules;
