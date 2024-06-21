import React, { useEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Appbar, IconButton } from "react-native-paper";
import { Icon } from "react-native-elements";
import { router } from "expo-router";
import { useRouter, useGlobalSearchParams } from "expo-router";
import tw from "twrnc";

const PatientCard = ({ patient }: { patient: any }) => {
  return (
    <View
      style={tw`w-11/12 bg-white p-5 rounded-lg shadow-md ml-5 mt-3 flex-row`}
    >
      <View>
        <Text style={tw`text-xl font-bold mb-2`}>{patient.name}</Text>
        <Text style={tw`text-lg mb-1`}>
          Age: {patient.age} {patient.gender}
        </Text>
        <Text style={tw`text-lg mb-1`}>{patient.healthCondition}</Text>
        <Text style={tw`text-lg mb-1`}>
          Criticality Score: {patient.criticalityScore}
        </Text>
        <View style={tw`bg-red-500 rounded px-3 py-1 mt-2`}>
          <Text style={tw`text-white font-bold`}>Critical</Text>
        </View>
        <TouchableOpacity
          style={tw`bg-black rounded px-5 py-2 mt-5`}
          onPress={() =>
            router.push({
              pathname: "/Details/Careplans",
              params: patient,
            })
          }
        >
          <Text style={tw`text-white font-bold`}>Show Careplan</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={{ uri: patient.imageUri }}
          style={tw`w-37 h-37 rounded-full ml-7 mt-5`}
        />
      </View>
    </View>
  );
};

const EquipmentItem = ({ equipment }: { equipment: any }) => {
  return (
    <View
      style={tw`flex-row items-center bg-white p-3 mb-2 rounded-lg border border-gray-300`}
    >
      <Icon
        name={equipment.icon}
        type="font-awesome-5"
        size={24}
        style={tw`mr-4`}
      />
      <Text style={tw`text-lg`}>{equipment.name}</Text>
    </View>
  );
};

const StaffItem = ({ staff }: { staff: any }) => {
  return (
    <View
      style={tw`flex-row items-center bg-white p-3 mb-2 rounded-lg border border-gray-300`}
    >
      <Image
        source={{ uri: staff.image }}
        style={tw`w-12 h-12 rounded-full mr-4`}
      />
      <View style={tw`flex-1`}>
        <Text style={tw`text-lg`}>
          {staff.role}: {staff.name}
        </Text>
        <Text style={tw`text-sm text-gray-600`}>Staff ID: {staff.id}</Text>
      </View>
    </View>
  );
};

const patients = [
  {
    name: "Sarah Chang",
    age: 39,
    gender: "Female",
    condition: "Severe Sepsis",
    score: 9.4,
    image: "https://via.placeholder.com/150",
  },
  // Add more patients as needed
];

const staffs = [
  {
    name: "Ananya Chavan",
    role: "Nurse",
    id: 22591,
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Vivaan Kapoor",
    role: "Nurse",
    id: 24932,
    image: "https://via.placeholder.com/50",
  },
  // Add more staff members as needed
];

const equipment = [
  {
    name: "ICU Room 1",
    icon: "bed",
  },
  {
    name: "Ventilator",
    icon: "heartbeat",
  },
  {
    name: "IV Pump",
    icon: "prescription-bottle",
  },
  {
    name: "Antibiotics",
    icon: "pills",
  },
  {
    name: "Vasopressors",
    icon: "syringe",
  },
  // Add more equipment as needed
];

const ResourceAllocationScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const patients: any = [useGlobalSearchParams()];

  const staffs = [
    {
      name: "Ananya Chavan",
      role: "Nurse",
      id: 22591,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Vivaan Kapoor",
      role: "Nurse",
      id: 24932,
      image: "https://via.placeholder.com/50",
    },
    // Add more staff members as needed
  ];

  const equipment = [
    {
      name: "ICU Room 1",
      icon: "bed",
    },
    {
      name: "Ventilator",
      icon: "heartbeat",
    },
    {
      name: "IV Pump",
      icon: "prescription-bottle",
    },
    {
      name: "Antibiotics",
      icon: "pills",
    },
    {
      name: "Vasopressors",
      icon: "syringe",
    },
    // Add more equipment as needed
  ];

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Resource Allocation" />
      </Appbar.Header>
      <ScrollView
        style={tw`flex-1 bg-gray-100`}
        contentContainerStyle={tw`py-2`}
        showsVerticalScrollIndicator={false}
      >
        {patients.map((patient: any) => (
          <PatientCard key={patient.name} patient={patient} />
        ))}
        <View style={tw`mx-4 my-2`}>
          <Text style={tw`text-xl font-bold mb-2`}>Staffs</Text>
          <IconButton
            icon="pencil"
            size={20}
            style={tw`absolute right-0 top-0`}
            onPress={() => {
              /* Add edit action */
            }}
          />
          {staffs.map((staff) => (
            <StaffItem key={staff.id} staff={staff} />
          ))}
        </View>
        <View style={tw`mx-4 my-2`}>
          <Text style={tw`text-xl font-bold mb-2`}>Equipment</Text>
          <IconButton
            icon="pencil"
            size={20}
            style={tw`absolute right-0 top-0`}
            onPress={() => {
              /* Add edit action */
            }}
          />
          {equipment.map((item) => (
            <EquipmentItem key={item.name} equipment={item} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default ResourceAllocationScreen;
