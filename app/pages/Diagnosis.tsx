import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Appbar, Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { router } from "expo-router";
import { ArrowUpRightIcon, EllipsisHorizontalCircleIcon } from "react-native-heroicons/outline";
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
  const navigation = useNavigation();
  return (
    <>

<Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Diagnosis" />
      </Appbar.Header>
      <ScrollView
        style={tw`bg-gray-200 pt-1 px-0.5`}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical
      >
        <Searchbar
          placeholder="Search"
          value={searchQuery}
          onChangeText={(query) => setSearchQuery(query)}
          style={{
            borderRadius: 10,
            width: "92%",
            marginHorizontal: 16,
            margin: 10,
            backgroundColor : 'white'
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
      <>
      <View
        style={tw`px-1 w-full bg-white rounded-xl shadow flex flex-cols h-auto`}
      >
        <View
          onPress={() => {
            router.push({
              pathname: "/Diagnosis",
              params: patient,
            });
          }}
        >
         <View style={tw`flex flex-row justify-between p-5`}>
         <View
              style={tw`flex bg-white border border-red-500 rounded-full py-1  w-20  px-3 `} >
              <Text style={tw`text-red-500 font-semibold`}>
                {patient.Criticality}
              </Text> 
          </View>

          <View>
            <EllipsisHorizontalCircleIcon/>
          </View>
          </View> 
         
          <View style={tw`mt-3 flex flex-row ` }>
          <Image
              source={{ uri: patient.image_uri }}
              style={tw`w-14 h-14 rounded-full mx-5 mb-3`}
            />
            <View style={tw`flex flex-cols`}>
            <Text style={tw`text-lg font-semibold text-black`}>
                {patient.name}  {patient.gender === "Female" ? "♀" : "♂"
                }
              </Text>
              <View style={tw`flex flex-row`}>
              <Text style={tw`text-gray-700 mt-1`}>
                {patient.age}  | Criticality Score : {patient.CriticalityScore}
              </Text>
              </View>
              
            </View>
  
            <TouchableOpacity
                    style={tw`bg-blue-500 p-4  mx-[5%] rounded-full mb-10 ml-10  flex-row justify-center items-center gap-2`}
                    onPress={() => router.push({pathname: "/Diagnosis", params: patient})}
                  >
                    <ArrowUpRightIcon size={20} color={"white"} />
                  </TouchableOpacity>
            
          </View>
          
        </View>
      </View>
      </>
    );
  }
};

export default Diagnosis;

const styles = StyleSheet.create({});



