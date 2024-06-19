import { useNavigation } from "@react-navigation/native";
import Markdown from "@ronradtke/react-native-markdown-display";
import React, { useState } from "react";
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

type CarePlan = {
  diagnosis: string;
  evaluation: string;
  follow_up: string;
  goals: string;
  interventions: string;
  patient_education: string;
};

const initialCarePlan: CarePlan = {
  diagnosis:
    "Based on the provided data, the patient presents with several concerning factors.  \n\n* *Elevated Cholesterol:* The patient's cholesterol level of 260 is significantly higher than the recommended level, putting them at risk for heart disease. \n* *Abnormal Red Cell Distribution Width (RDW):*  The RDW result of 14.0, although within the reference range, is at the upper limit. This could indicate a potential issue with red blood cell size variation, which can occur in conditions like anemia or iron deficiency. \n* *Elevated Resting Blood Pressure:*  The patient's resting blood pressure of 140 is considered high, placing them at risk for hypertension and cardiovascular events. \n* *Abnormal Oldpeak:* The Oldpeak value of 2.3 suggests potential ischemia or a lack of blood flow to the heart muscle. This is a concerning finding that requires further investigation. \n\nOverall, the patient's presentation raises concerns about potential cardiovascular disease and requires further evaluation and management.",
  evaluation:
    "The patient's progress will be evaluated through:\n\n* *Clinical Assessment:* Regular monitoring of blood pressure, cholesterol, and other relevant vital signs. \n* *Laboratory Tests:*  Follow-up blood tests to monitor cholesterol levels, complete blood count (CBC), and other relevant markers. \n* *Imaging Studies:* Repeat echocardiogram and/or coronary angiography as needed. \n* *Symptom Assessment:*  Assessment of any chest pain, shortness of breath, or other symptoms related to cardiovascular disease. \n* *Patient Self-Report:*  Regular feedback from the patient regarding their symptoms, medication adherence, and lifestyle changes.",
  follow_up:
    "The patient should follow up with the cardiologist and/or primary care physician as directed, typically every 3-6 months, or sooner if any concerning symptoms arise.  The frequency of follow-up appointments will depend on the patient's individual needs and risk factors.",
  goals:
    "The primary goals of care are:\n\n* *Reduce the risk of heart disease:*  This involves lowering cholesterol, controlling blood pressure, and addressing any underlying coronary artery disease. \n* *Identify the cause of abnormal Oldpeak and RDW:* Further investigation is required to determine the source of these findings. \n* *Improve overall cardiovascular health:*  This includes promoting a healthy lifestyle, such as regular exercise, a balanced diet, and smoking cessation.",
  interventions:
    "To achieve these goals, the following interventions are recommended:\n\n* *Cardiology Consultation:*  Refer the patient to a cardiologist for a comprehensive evaluation, including an electrocardiogram (ECG), echocardiogram, and potentially coronary angiography. \n* *Lifestyle Modifications:*  Educate the patient on the importance of lifestyle modifications, such as adopting a heart-healthy diet, maintaining a healthy weight, engaging in regular physical activity, and avoiding smoking. \n* *Medications:*  Consider medications to lower cholesterol (statins), manage blood pressure (antihypertensives), and potentially manage any underlying coronary artery disease. \n* *Blood Tests and Monitoring:*  Regular monitoring of blood pressure, cholesterol, and other relevant lab parameters is essential. \n* *Follow-up:*  Regular follow-up appointments with the cardiologist and primary care physician are crucial to monitor progress and adjust treatment as needed.",
  patient_education:
    "The patient should be educated on the following:\n\n* *Heart Health:*  Explain the importance of maintaining a healthy heart and the risks associated with high cholesterol, high blood pressure, and other cardiovascular risk factors. \n* *Lifestyle Modifications:*  Provide detailed guidance on lifestyle changes, including dietary recommendations, exercise plans, and smoking cessation strategies. \n* *Medication Adherence:*  Stress the importance of taking medications as prescribed and adhering to the treatment plan. \n* *Early Detection and Prevention:*  Emphasize the significance of early detection and prevention of heart disease through regular checkups and adherence to recommended screenings. \n* *Resources and Support:*  Provide information about local resources and support groups for patients with heart disease.",
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
  const [carePlan, setCarePlan] = useState<CarePlan>(initialCarePlan);
  const patientDetails = [useGlobalSearchParams()];
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
        {Object.entries(carePlan).map(([key, value]) =>
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
