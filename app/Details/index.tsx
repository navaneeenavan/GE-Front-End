import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Appbar, IconButton } from "react-native-paper";
import { Icon } from "react-native-elements";
import { router } from "expo-router";
import { useRouter, useGlobalSearchParams } from "expo-router";
const PatientCard = ({ patient }: { patient: any }) => {
  return (
    <View style={styles.card}>
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/Details/Careplans")}
        >
          <Text style={styles.buttonText}>Show Careplan</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={{ uri: patient.imageUri }} style={styles.patientImage} />
      </View>
    </View>
  );
};

const EquipmentItem = ({ equipment }: { equipment: any }) => {
  return (
    <View style={styles.itemContainer}>
      <Icon
        name={equipment.icon}
        type="font-awesome-5"
        size={24}
        style={styles.itemIcon}
      />
      <Text style={styles.itemText}>{equipment.name}</Text>
    </View>
  );
};

const StaffItem = ({ staff }: { staff: any }) => {
  return (
    <View style={styles.itemContainer1}>
      <Image source={{ uri: staff.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemText1}>
          {staff.role}: {staff.name}
        </Text>
        <Text style={styles.itemSubText}>Staff ID: {staff.id}</Text>
      </View>
    </View>
  );
};

const patients = [
  {
    name: "Sarah Chang",
    age: 39,
    gender: "Female",
    condition: "Severe Sepsis",
    score: 9.4,
    image: "https://via.placeholder.com/150",
  },
  // Add more patients as needed
];

const staffs = [
  {
    name: "Ananya Chavan",
    role: "Nurse",
    id: 22591,
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Vivaan Kapoor",
    role: "Nurse",
    id: 24932,
    image: "https://via.placeholder.com/50",
  },
  // Add more staff members as needed
];

const equipment = [
  {
    name: "ICU Room 1",
    icon: "bed",
  },
  {
    name: "Ventilator",
    icon: "heartbeat",
  },
  {
    name: "IV Pump",
    icon: "prescription-bottle",
  },
  {
    name: "Antibiotics",
    icon: "pills",
  },
  {
    name: "Vasopressors",
    icon: "syringe",
  },
  // Add more equipment as needed
];

const ResourceAllocationScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const patients: any = [useGlobalSearchParams()];

  const staffs = [
    {
      name: "Ananya Chavan",
      role: "Nurse",
      id: 22591,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Vivaan Kapoor",
      role: "Nurse",
      id: 24932,
      image: "https://via.placeholder.com/50",
    },
    // Add more staff members as needed
  ];

  const equipment = [
    {
      name: "ICU Room 1",
      icon: "bed",
    },
    {
      name: "Ventilator",
      icon: "heartbeat",
    },
    {
      name: "IV Pump",
      icon: "prescription-bottle",
    },
    {
      name: "Antibiotics",
      icon: "pills",
    },
    {
      name: "Vasopressors",
      icon: "syringe",
    },
    // Add more equipment as needed
  ];

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Resource Allocation" />
      </Appbar.Header>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {patients.map((patient: any) => (
          <PatientCard key={patient.name} patient={patient} />
        ))}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Staffs</Text>
          <IconButton
            icon="pencil"
            size={20}
            style={styles.editIcon}
            onPress={() => {
              /* Add edit action */
            }}
          />
          {staffs.map((staff) => (
            <StaffItem key={staff.id} staff={staff} />
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Equipment</Text>
          <IconButton
            icon="pencil"
            size={20}
            style={styles.editIcon}
            onPress={() => {
              /* Add edit action */
            }}
          />
          {equipment.map((item) => (
            <EquipmentItem key={item.name} equipment={item} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  contentContainer: {
    paddingVertical: 10,
  },
  section: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  editIcon: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
  itemIcon: {
    marginRight: 16,
  },
  itemText: {
    fontSize: 16,
  },
  itemContainer1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  itemInfo: {
    flex: 1,
  },
  itemText1: {
    fontSize: 16,
  },
  itemSubText: {
    fontSize: 14,
    color: "#666",
  },
  card: {
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

export default ResourceAllocationScreen;
