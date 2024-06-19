import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { router } from "expo-router";

const MyPatients = () => {
  const [SearchQuery, setSearchQuery] = React.useState("");
  const patientsList = [
    {
      id: 1,
      name: "Sarah Chang",
      age: 39,
      gender: "Female",
      healthCondition: "Severe Sepsis",
      criticalityScore: 9.4,
      criticality: "Critical",
      imageUri: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "John Doe",
      age: 50,
      gender: "Male",
      healthCondition: "Heart Attack",
      criticalityScore: 8.9,
      criticality: "Critical",
      imageUri: "https://via.placeholder.com/60",
    },
    {
      id: 3,
      name: "Jane Smith",
      age: 45,
      gender: "Female",
      healthCondition: "Stroke",
      criticalityScore: 7.5,
      criticality: "High",
      imageUri: "https://via.placeholder.com/60",
    },
    {
      id: 4,
      name: "Mark Johnson",
      age: 60,
      gender: "Male",
      healthCondition: "Pneumonia",
      criticalityScore: 6.8,
      criticality: "Moderate",
      imageUri: "https://via.placeholder.com/60",
    },
    {
      id: 5,
      name: "Emily Davis",
      age: 30,
      gender: "Female",
      healthCondition: "COVID-19",
      criticalityScore: 8.2,
      criticality: "High",
      imageUri: "https://via.placeholder.com/60",
    },
    {
      id: 6,
      name: "Michael Brown",
      age: 55,
      gender: "Male",
      healthCondition: "Kidney Failure",
      criticalityScore: 7.0,
      criticality: "Moderate",
      imageUri: "https://via.placeholder.com/60",
    },
    {
      id: 7,
      name: "Laura Wilson",
      age: 28,
      gender: "Female",
      healthCondition: "Asthma",
      criticalityScore: 5.5,
      criticality: "Low",
      imageUri: "https://via.placeholder.com/60",
    },
    {
      id: 8,
      name: "James Taylor",
      age: 47,
      gender: "Male",
      healthCondition: "Diabetes",
      criticalityScore: 6.3,
      criticality: "Moderate",
      imageUri: "https://via.placeholder.com/60",
    },
    {
      id: 9,
      name: "Linda Martinez",
      age: 52,
      gender: "Female",
      healthCondition: "Hypertension",
      criticalityScore: 6.1,
      criticality: "Moderate",
      imageUri: "https://via.placeholder.com/60",
    },
    {
      id: 10,
      name: "Robert Anderson",
      age: 65,
      gender: "Male",
      healthCondition: "Alzheimer's Disease",
      criticalityScore: 4.9,
      criticality: "Low",
      imageUri: "https://via.placeholder.com/60",
    },
  ];

  return (
    <>
      <ScrollView
        style={tw`bg-[#F2F2F2] pt-[50] px-0.5`}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical
      >
        <Searchbar
          placeholder="Search"
          value={SearchQuery}
          onChangeText={(query) => setSearchQuery(query)}
          style={{
            borderRadius: 10,
            width: "95%",
            marginHorizontal: 10,
            marginBottom: 10,
          }}
        />

        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingBottom: 70,
            width: "100%",
            paddingHorizontal: 20,
            gap: 10,
          }}
        >
          {patientsList.map((patient) => (
            <PatientsCard key={patient.id} patient={patient} />
          ))}
        </View>
      </ScrollView>
    </>
  );

  interface Patient {
    id: number;
    name: string;
    imageUri: string;
    age: number;
    gender: string;
    healthCondition: string;
    criticalityScore: number;
    criticality: string;
    [key: string]: string | number;
  }

  interface PatientsCardProps {
    patient: Patient;
  }

  function PatientsCard({ patient }: PatientsCardProps) {
    return (
      <SafeAreaView
        style={tw`pb-[10] pl-[10] pr-[10]  w-5/5 bg-[#FFF6F6] rounded-xl shadow`}
      >
        <TouchableOpacity
          onPress={() => {
            router.push({
              pathname: "/Details",
              params: patient,
            });
          }}
        >
          <View style={tw`flex flex-row items-center mt-[-25]`}>
            <Image
              source={{ uri: patient.imageUri }}
              style={tw`w-16 h-16 rounded-full`}
            />
            <View style={tw`ml-4 flex-1`}>
              <Text style={tw`text-lg font-semibold text-black`}>
                {patient.name}
              </Text>
              <Text style={tw`text-gray-700 mt-1`}>
                Age: {patient.age} {patient.gender}
              </Text>
              <Text style={tw`text-gray-700`}>{patient.healthCondition}</Text>
              <Text style={tw`text-gray-700`}>
                Criticality Score: {patient.criticalityScore}
              </Text>
            </View>
            <View
              style={tw`bg-white border border-red-500 rounded-full px-3 py-1`}
            >
              <Text style={tw`text-red-500 font-semibold`}>
                {patient.criticality}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
};

export default MyPatients;

const styles = StyleSheet.create({});
