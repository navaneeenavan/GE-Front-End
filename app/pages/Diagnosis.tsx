import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { router } from "expo-router";

const Diagnosis = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const patientsList = [
    {
      id: 1,
      name: "Sarah Chang",
      age: 39,
      gender: "Female",
      HealthCondition: "Severe Sepsis",
      CriticalityScore: 9.4,
      Criticality: "Critical",
      image_uri: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "John Doe",
      age: 45,
      gender: "Male",
      HealthCondition: "Cardiac Arrest",
      CriticalityScore: 8.9,
      Criticality: "Critical",
      image_uri: "https://via.placeholder.com/60",
    },
    {
      id: 3,
      name: "Jane Smith",
      age: 32,
      gender: "Female",
      HealthCondition: "Stroke",
      CriticalityScore: 9.1,
      Criticality: "Critical",
      image_uri: "https://via.placeholder.com/60",
    },
    // Add more patient data as needed
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
          value={searchQuery}
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
          {patientsList
            .filter((patient) =>
              patient.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((patient) => (
              <PatientsCard key={patient.id} patient={patient} />
            ))}
        </View>
      </ScrollView>
    </>
  );

  interface Patient {
    id: number;
    name: string;
    image_uri: string;
    age: number;
    gender: string;
    HealthCondition: string;
    CriticalityScore: number;
    Criticality: string;
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
              pathname: "/Diagnosis",
              params: patient,
            });
          }}
        >
          <View style={tw`flex flex-row items-center mt-[-25]`}>
            <Image
              source={{ uri: patient.image_uri }}
              style={tw`w-16 h-16 rounded-full`}
            />
            <View style={tw`ml-4 flex-1`}>
              <Text style={tw`text-lg font-semibold text-black`}>
                {patient.name}
              </Text>
              <Text style={tw`text-gray-700 mt-1`}>
                Age: {patient.age} {patient.gender}
              </Text>
              <Text style={tw`text-gray-700`}>{patient.HealthCondition}</Text>
              <Text style={tw`text-gray-700`}>
                Criticality Score: {patient.CriticalityScore}
              </Text>
            </View>
            <View
              style={tw`bg-white border border-red-500 rounded-full px-3 py-1`}
            >
              <Text style={tw`text-red-500 font-semibold`}>
                {patient.Criticality}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
};

export default Diagnosis;

const styles = StyleSheet.create({});
