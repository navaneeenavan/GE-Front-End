import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Paper from "react-native-paper";
import {
  Appbar,
  Button,
  Dialog,
  PaperProvider,
  Searchbar,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { router, useNavigation } from "expo-router";
import {
  ArrowUpRightIcon,
  BoltIcon,
  EllipsisHorizontalCircleIcon,
} from "react-native-heroicons/outline";
import App from "../Notifications";
import axios from "axios";

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
const MyPatients = () => {
  const [SearchQuery, setSearchQuery] = React.useState("");
  const [users,setUsers] = React.useState([])

  const navigation = useNavigation();
  useEffect(()=>{
     axios.get("https://medisynth-backend.onrender.com/patients/all").then((res)=>{
      setUsers(res.data)
      console.log(res.data)
     }).catch((error)=>{
      console.log(error)
     })
  },[])
  return (
  <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Patients" />
        <TouchableOpacity
          onPress={() => {
            router.push("/SmartAssistant");
          }}
        style={tw`mr-3`}>
          <BoltIcon size={24} color="black" />
        </TouchableOpacity>
      </Appbar.Header>
      <ScrollView
        style={tw`bg-gray-200 pt-1 `}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical
      >
        <Searchbar
          placeholder="Search"
          value={SearchQuery}
          onChangeText={(query) => setSearchQuery(query)}
          style={{
            borderRadius: 10,
            width: "92%",
            marginHorizontal: 16,
            margin: 10,
            backgroundColor: "white",
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
          {users.map((patient) => (
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
    const [dialogVisible, setDialogVisible] = React.useState(false);
    
    const showDialog = () => setDialogVisible(true);

    const hideDialog = (patient: any) => {
      patientsList.splice(patientsList.indexOf(patient), 1);
      setDialogVisible(false);
    };
    const criticality_score=  Math.round(patient.criticality_score)
    return (
      
      <View
        style={tw` w-full bg-white rounded-xl shadow flex flex-cols h-auto`}
      >
        <View style={tw`flex flex-row justify-between p-5`}>
          <View
            style={tw`flex bg-white border border-red-500 rounded-full py-1  w-20  px-1 items-center `}
          >
            <Text style={tw`text-red-500 font-semibold`}>
              {patient.criticality_level}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              showDialog();
            }}
          >
            <EllipsisHorizontalCircleIcon />
          </TouchableOpacity>
        </View>

        <View style={tw`mt-3 flex flex-row `}>
          <Image
            source={{ uri: "https://via.placeholder.com/60" }}
            style={tw`w-14 h-14 rounded-full mx-5 mb-3`}
          />
          <View style={tw`flex flex-cols`}>
            <Text style={tw`text-lg font-semibold text-black`}>
              {patient.patient_info.name} {patient.patient_info.gender === "Female" ? "♀" : "♂"}
            </Text>
            <View style={tw`flex flex-row`}>
              <Text style={tw`text-gray-700 mt-1`}>
                {patient.patient_info.age} | Criticality Score : {criticality_score}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={tw`bg-blue-500 p-4  mx-[5%] rounded-full mb-10 ml-10  flex-row justify-center items-center gap-2`}
            onPress={() =>
              router.push({ pathname: "/Details", params: patient })
            }
          >
            <ArrowUpRightIcon size={20} color={"white"} />
          </TouchableOpacity>
        </View>
        
          <Dialog
            visible={dialogVisible}
            onDismiss={() => {
              hideDialog(patient);
            }}
          >
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paper.Text variant="bodyMedium">
                Do you want to Remove this Patient
              </Paper.Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Delete</Button>
            </Dialog.Actions>
          </Dialog>
      </View>

    );
  }
};

export default MyPatients;

const styles = StyleSheet.create({});
