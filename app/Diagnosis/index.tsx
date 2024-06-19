import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";
import { useGlobalSearchParams } from "expo-router";

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
      <ScrollView style={styles.container}>
        {newFunction(patient)}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Primary Diagnosis:</Text>
          <Text style={styles.sectionContent}>Severe Sepsis</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Secondary Diagnoses:</Text>
          <Text style={styles.sectionContent}>
            Acute Respiratory Distress Syndrome (ARDS)
          </Text>
          <Text style={styles.sectionContent}>
            Hypotension (Low Blood Pressure)
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Previous Diagnoses:</Text>
          <Text style={styles.sectionContent}>Type 1 Diabetes Mellitus</Text>
          <Text style={styles.sectionContent}>
            Hypertension (High Blood Pressure)
          </Text>
          <Text style={styles.sectionContent}>Obesity</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Medications:</Text>
          <Text style={styles.sectionContent}>
            Insulin (for diabetes management)
          </Text>
          <Text style={styles.sectionContent}>
            Lisinopril (for blood pressure control)
          </Text>
          <Text style={styles.sectionContent}>
            Furosemide (for fluid retention)
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vital Signs:</Text>
          <Text style={styles.sectionContent}>Blood Pressure: 90/60 mmHg</Text>
          <Text style={styles.sectionContent}>Heart Rate: 110 bpm</Text>
          <Text style={styles.sectionContent}>Respiratory Rate: 24 bpm</Text>
          <Text style={styles.sectionContent}>
            Temperature: 38.5°C (101.3°F)
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => pickDocument()}>
          <Text style={styles.buttonText}>Upload Lab Report</Text>
          <MaterialIcons name="upload-file" size={24} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#d0e8cf",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  profileContainer: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileDetails: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    color: "#555",
  },
  criticalContainer: {
    marginTop: 4,
    backgroundColor: "#ff6b6b",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: "flex-start",
  },
  criticalText: {
    color: "#fff",
    fontWeight: "bold",
  },
  section: {
    marginBottom: 16,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  sectionContent: {
    fontSize: 14,
    color: "#555",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 16,
    width: "90%",
    marginLeft: "5%",
    borderRadius: 25,
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
function newFunction(patient: any) {
  return (
    <View style={styles.profileContainer}>
      <Image
        source={{ uri: "https://via.placeholder.com/80" }} // Replace with your image URL
        style={styles.profileImage}
      />
      <View style={styles.profileDetails}>
        <Text style={styles.name}>{patient.name}</Text>
        <Text style={styles.details}>
          Age: {patient.age} {patient.gender}
        </Text>
        <Text style={styles.details}>{patient.HealthCondition}</Text>
        <View style={styles.criticalContainer}>
          <Text style={styles.criticalText}>{patient.Criticality}</Text>
        </View>
        <Text style={styles.details}>
          Criticality Score: {patient.CriticalityScore}
        </Text>
      </View>
    </View>
  );
}
