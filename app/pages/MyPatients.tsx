import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SearchBar } from "react-native-screens";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { router } from "expo-router";

const MyPatients = () => {
  const [SearchQuery, setSearchQuery] = React.useState("");
  const patientsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const PatientData = {
    name: "Sarah Chang",
    age: 39,
    gender: "Female",
    HealthCondition: "Severe Sepsis",
    CriticalityScore: 9.4,
    Criticality: "Critical",
    image_uri: "https://via.placeholder.com/60",
  };
  return (
    <ScrollView
      style={tw`bg-[#F2F2F2] z-[1]`}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingVertical: 30,
          width: "100%",
          paddingHorizontal: 20,
          gap: 10,
        }}
      >
        {patientsList.map((item, index) => (
          <PatientsCard
            key={index}
            name={PatientData.name}
            image_uri={PatientData.image_uri}
            age={PatientData.age}
            gender={PatientData.gender}
            HealthCondition={PatientData.HealthCondition}
            CriticalityScore={PatientData.CriticalityScore}
            Criticality={PatientData.Criticality}
          />
        ))}
      </View>
    </ScrollView>
  );

  interface PatientsCardProps {
    name: string;
    image_uri: string;
    age: number;
    gender: string;
    HealthCondition: string;
    CriticalityScore: number;
    Criticality: string;
  }

  function PatientsCard({
    name,
    image_uri,
    age,
    gender,
    HealthCondition,
    CriticalityScore,
    Criticality,
  }: PatientsCardProps) {
    return (
      <SafeAreaView
        style={tw`pb-[10] pl-[10] pr-[10]  w-5/5 bg-[#FFF6F6] rounded-xl shadow`}
      >
        <TouchableOpacity
          onPress={() => {
            router.push("/Details");
          }}
        >
          <View style={tw`flex flex-row items-center mt-[-25]`}>
            <Image
              source={{ uri: image_uri }}
              style={tw`w-16 h-16 rounded-full`}
            />
            <View style={tw`ml-4 flex-1`}>
              <Text style={tw`text-lg font-semibold text-black`}>{name}</Text>
              <Text style={tw`text-gray-700 mt-1`}>
                Age: {age} {gender}
              </Text>
              <Text style={tw`text-gray-700`}>{HealthCondition}</Text>
              <Text style={tw`text-gray-700`}>
                Criticality Score: {CriticalityScore}
              </Text>
            </View>
            <View
              style={tw`bg-white border border-red-500 rounded-full px-3 py-1`}
            >
              <Text style={tw`text-red-500 font-semibold`}>{Criticality}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
};

export default MyPatients;

const styles = StyleSheet.create({});
