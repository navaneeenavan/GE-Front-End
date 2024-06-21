import { useNavigation } from "@react-navigation/native";
import Markdown from "@ronradtke/react-native-markdown-display";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Card, Title, Paragraph, Appbar } from "react-native-paper";
import { router, useGlobalSearchParams } from "expo-router";
import axios from "axios";
type CarePlan = {
  diagnosis: string;
  evaluation: string;
  follow_up: string;
  goals: string;
  interventions: string;
  patient_education: string;
};

const PatientCard = ({ patient }: { patient: any }) => {
  return (
    <View style={styles.card1}>
      <View>
        <Text style={styles.title}>{patient.name}</Text>
        <Text style={styles.details}>
          Age: {patient.age} {patient.gender}
        </Text>
        <Text style={styles.details}>{patient.healthCondition}</Text>
        <Text style={styles.details}>
          Criticality Score: {patient.criticalityScore}
        </Text>
        <View style={styles.criticalContainer}>
          <Text style={styles.criticalText}>Critical</Text>
        </View>
      </View>
      <View>
        <Image source={{ uri: patient.imageUri }} style={styles.patientImage} />
      </View>
    </View>
  );
};

const CarePlanScreen = () => {
  const navigation = useNavigation();
  const [carePlan, setCarePlan] = useState<CarePlan>();
  const patientDetails = [useGlobalSearchParams()];
  const fetch_user_careplan = async () => {
    try {
      axios
        .post(
          "https://medisynth-backend.onrender.com/patients/78718/generate_care_plan",
          {}
        )
        .then((res) => {
          setCarePlan(res.data.care_plan);
          console.log("REsponse fetched successfully");
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch_user_careplan();
  }, []);
  const renderCarePlanCard = (title: string, content: string) => (
    <Card style={styles.card} key={title}>
      <Card.Content>
        <Title>{title}</Title>
        <Markdown>{content}</Markdown>
      </Card.Content>
    </Card>
  );

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Care Plan" />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        {patientDetails.map((patient) => (
          <PatientCard patient={patient} />
        ))}
        {Object.entries(carePlan ?? {}).map(([key, value]) =>
          renderCarePlanCard(key.replace("_", " ").toUpperCase(), value)
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    gap: 10,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    margin: 20,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  card1: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    marginLeft: 20,
    marginTop: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    marginBottom: 5,
  },
  criticalContainer: {
    backgroundColor: "#ff4d4d",
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  criticalText: {
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  patientImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginLeft: 30,
    marginTop: 20,
  },
});

export default CarePlanScreen;
