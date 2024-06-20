import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";
import { useGlobalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

type FileInfo = DocumentPicker.DocumentPickerResult | null;

const App = () => {
  const [file, setFile] = useState<FileInfo>(null);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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

  const patient = useGlobalSearchParams();

  const upload_Document = async () => {
    try {
      const formData = new FormData();
      formData.append("file", {
        uri: file?.assets ? file.assets[0].uri : "",
        name: file?.assets ? file.assets[0].name : "",
        type: file?.assets ? file.assets[0].mimeType : "application/pdf",
      } as any); // Type assertion to satisfy FormData requirements
    } catch (error) {
      console.log(error);
      Alert.alert("An error occurred while uploading the file");
    }
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Diagnosis" />
      </Appbar.Header>
      <ScrollView style={tw`flex-1 pt-5 pb-7 px-4 bg-gray-200`}>
        {newFunction(patient)}

        <View style={tw`mb-4 bg-white p-4 rounded-2xl gap-1`}>
          <Text style={tw`text-lg font-semibold mb-1`}>Primary Diagnosis</Text>
          <Text style={tw`text-base text-gray-600`}>Severe Sepsis</Text>
        </View>

        <View style={tw`mb-4 bg-white p-4 rounded-2xl gap-1`}>
          <Text style={tw`text-lg font-semibold mb-1`}>Secondary Diagnoses</Text>
          <Text style={tw`text-base text-gray-600`}>
            Acute Respiratory Distress Syndrome (ARDS)
          </Text>
          <Text style={tw`text-base text-gray-600`}>
            Hypotension (Low Blood Pressure)
          </Text>
        </View>

        <View style={tw`mb-4 bg-white p-4 rounded-2xl gap-1`}>
          <Text style={tw`text-lg font-semibold mb-1`}>Previous Diagnoses</Text>
          <Text style={tw`text-base text-gray-600`}>Type 1 Diabetes Mellitus</Text>
          <Text style={tw`text-base text-gray-600`}>
            Hypertension (High Blood Pressure)
          </Text>
          <Text style={tw`text-base text-gray-600`}>Obesity</Text>
        </View>

        <View style={tw`mb-4 bg-white p-4 rounded-2xl gap-1`}>
          <Text style={tw`text-lg font-semibold mb-1`}>Medications</Text>
          <Text style={tw`text-base text-gray-600`}>
            Insulin (For diabetes management)
          </Text>
          <Text style={tw`text-base text-gray-600`}>
            Lisinopril (For blood pressure control)
          </Text>
          <Text style={tw`text-base text-gray-600`}>
            Furosemide (For fluid retention)
          </Text>
        </View>

        <View style={tw`mb-4 bg-white p-4 rounded-2xl gap-1`}>
          <Text style={tw`text-lg font-semibold mb-1`}>Vital Signs</Text>
          <Text style={tw`text-base text-gray-600`}>Blood Pressure: 90/60 mmHg</Text>
          <Text style={tw`text-base text-gray-600`}>Heart Rate: 110 bpm</Text>
          <Text style={tw`text-base text-gray-600`}>Respiratory Rate: 24 bpm</Text>
          <Text style={tw`text-base text-gray-600`}>
            Temperature: 38.5°C (101.3°F)
          </Text>
        </View>

        <TouchableOpacity
          style={tw`bg-blue-500 p-4 w-[90%] mx-[5%] rounded-full mb-10 flex-row justify-center items-center gap-2`}
          onPress={() => pickDocument()}
        >
          <Text style={tw`text-white text-lg font-semibold`}>Upload Lab Report</Text>
          <MaterialIcons name="upload-file" size={24} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default App;

function newFunction(patient: any) {
  return (
    <View style={tw`flex-row mb-4 bg-white p-4 rounded-2xl items-center`}>
      <Image
        source={{ uri: "https://via.placeholder.com/80" }} // Replace with your image URL
        style={tw`w-20 h-20 rounded-full mr-4`}
      />
      <View style={tw`flex-1`}>
        <View style={tw`flex flex-row justify-between`} >
        <Text style={tw`text-lg font-semibold`}>{patient.name}</Text>
        <View style={tw`mt-1 border border-red-700  rounded-full px-2 py-1 self-start`}>
          <Text style={tw`text-red-700 font-semibold`}>{patient.Criticality}</Text>
        </View>
        </View>
       
        <Text style={tw`text-base text-gray-600`}>
          Age: {patient.age}  |  {patient.gender}
        </Text>
        <Text style={tw`text-base text-gray-600`}>{patient.HealthCondition}</Text>
        
        <Text style={tw`text-base text-gray-600 font-bold`}>
          Criticality Score: {patient.CriticalityScore}
        </Text>
      </View>
    </View>
  );
}
