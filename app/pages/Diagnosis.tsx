import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Appbar, FAB, Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { router } from "expo-router";
import {
  ArrowUpRightIcon,
  BoltIcon,
  EllipsisHorizontalCircleIcon,
} from "react-native-heroicons/outline";
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";

const Diagnosis = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [PatientIDgenerated, setPatientIDgenerated] = useState<any>(0);
  const [file, setFile] =
    useState<DocumentPicker.DocumentPickerResult | null>();

  const pickDocument = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
      });
      if (!result.canceled) {
        console.log(result);
        setFile(result);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("An error occurred while uploading the file");
    }
  };

  const submitDocument = async () => {
    try {
      const formData = new FormData();
      formData.append("file", {
        uri: file?.assets ? file.assets[0].uri : "",
        name: file?.assets ? file.assets[0].name : "",
        type: file?.assets ? file.assets[0].mimeType : "application/pdf",
      } as any);
      axios
        .post(
          `https://medisynth-backend.onrender.com/patients/${PatientIDgenerated}/upload_lab_report`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log(response);
          Alert.alert("File uploaded successfully");
          setModalVisible(false);
          setFile(null);
          router.push({
            pathname: "/Diagnosis/AddPatient",
            params: { patient: PatientIDgenerated },
          });
        })
        .catch((error) => {
          console.log(error);
          Alert.alert("An error occurred while uploading the file");
        });
    } catch (error) {
      console.log(error);
      Alert.alert("An error occurred while uploading the file");
    }
  };

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
    {
      id: 4,
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
  const [StatePatientsList, setStatePatientsList] = useState(patientsList);
  const navigation = useNavigation();
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Diagnosis" />
        <TouchableOpacity
          onPress={() => {
            router.push("/SmartAssistant");
          }}
          style={tw`mr-3`}
        >
          <BoltIcon size={24} color="black"  />
        </TouchableOpacity>
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
          {patientsList
            .filter((patient) =>
              patient.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((patient) => (
              <PatientsCard key={patient.id} patient={patient} />
            ))}
        </View>
      </ScrollView>
      <FAB
        style={tw`bg-blue-500 absolute right-5 bottom-5`}
        icon="plus"
        onPress={() => {
          const randomNumber = Math.floor(10000 + Math.random() * 90000);
          setPatientIDgenerated(randomNumber);
          setModalVisible(true);
        }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
        >
          <View style={tw`w-72 bg-white rounded-xl p-5 items-center`}>
            <Text>{PatientIDgenerated}</Text>
            <TouchableOpacity
              style={tw`bg-black rounded-md py-2 px-4 mt-5`}
              onPress={() => {
                pickDocument();
              }}
            >
              <Text style={tw`text-white font-semibold`}>UploadDocument</Text>
            </TouchableOpacity>

            {file && <Text>{file.assets ? file.assets[0].name : ""}</Text>}
            {file && (
              <TouchableOpacity
                style={tw`bg-black rounded-md py-2 px-4 mt-5`}
                onPress={() => {
                  submitDocument();
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
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
          <View>
            <View style={tw`flex flex-row justify-between p-5`}>
              <View
                style={tw`flex bg-white border border-red-500 rounded-full py-1  w-20  px-3 `}
              >
                <Text style={tw`text-red-500 font-semibold`}>
                  {patient.Criticality}
                </Text>
              </View>

              <View>
                <EllipsisHorizontalCircleIcon />
              </View>
            </View>

            <View style={tw`mt-3 flex flex-row `}>
              <Image
                source={{ uri: patient.image_uri }}
                style={tw`w-14 h-14 rounded-full mx-5 mb-3`}
              />
              <View style={tw`flex flex-cols`}>
                <Text style={tw`text-lg font-semibold text-black`}>
                  {patient.name} {patient.gender === "Female" ? "♀" : "♂"}
                </Text>
                <View style={tw`flex flex-row`}>
                  <Text style={tw`text-gray-700 mt-1`}>
                    {patient.age} | Criticality Score :{" "}
                    {patient.CriticalityScore}
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                style={tw`bg-blue-500 p-4  mx-[5%] rounded-full mb-10 ml-10  flex-row justify-center items-center gap-2`}
                onPress={() =>
                  router.push({ pathname: "/Diagnosis", params: patient })
                }
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
