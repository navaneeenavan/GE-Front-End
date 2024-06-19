import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";

const Stack = createNativeStackNavigator();

const appointments = [
  {
    id: "1",
    status: "SOON",
    title: "Clinic visit appointment: cardiology",
    date: "06/20/24",
    time: "10:15 AM",
    doctor: {
      name: "Ahmed El Sayed",
      specialization: "Cardiologist, PhD, MD",
    },
  },
  {
    id: "2",
    status: "NEXT WEEK",
    title: "Online consultation: Blood test results",
    date: "06/27/24",
    time: "11:30 AM",
    doctor: {
      name: "Sharif Allee",
      specialization: "Therapist, PhD",
    },
  },
  {
    id: "3",
    status: "PAST",
    title: "Follow-up: General health check",
    date: "06/13/24",
    time: "09:00 AM",
    doctor: {
      name: "Maria Gomez",
      specialization: "General Practitioner, MD",
    },
  },
  {
    id: "4",
    status: "PAST",
    title: "Dental check-up",
    date: "06/10/24",
    time: "01:30 PM",
    doctor: {
      name: "John Smith",
      specialization: "Dentist, DDS",
    },
  },
  {
    id: "5",
    status: "SOON",
    title: "Eye examination",
    date: "06/21/24",
    time: "03:00 PM",
    doctor: {
      name: "Lucy Brown",
      specialization: "Ophthalmologist, MD",
    },
  },
  {
    id: "6",
    status: "NEXT WEEK",
    title: "Physical therapy session",
    date: "06/28/24",
    time: "10:00 AM",
    doctor: {
      name: "Kevin White",
      specialization: "Physical Therapist, DPT",
    },
  },
  {
    id: "7",
    status: "PAST",
    title: "Nutrition consultation",
    date: "06/12/24",
    time: "12:00 PM",
    doctor: {
      name: "Sophia Lee",
      specialization: "Dietitian, PhD",
    },
  },
  {
    id: "8",
    status: "SOON",
    title: "MRI scan",
    date: "06/23/24",
    time: "02:15 PM",
    doctor: {
      name: "Mohammed Ali",
      specialization: "Radiologist, MD",
    },
  },
  {
    id: "9",
    status: "NEXT WEEK",
    title: "Dermatology consultation",
    date: "06/30/24",
    time: "04:00 PM",
    doctor: {
      name: "Emily Davis",
      specialization: "Dermatologist, MD",
    },
  },
  {
    id: "10",
    status: "PAST",
    title: "ENT specialist consultation",
    date: "06/09/24",
    time: "11:00 AM",
    doctor: {
      name: "James Wilson",
      specialization: "ENT Specialist, MD",
    },
  },
];

type Appointment = {
  id: string;
  status: string;
  title: string;
  date: string;
  time: string;
  doctor: {
    name: string;
    specialization: string;
  };
};

const AppointmentCard = ({ appointment }: { appointment: Appointment }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{appointment.title}</Text>
    <View style={styles.detailRow}>
      <Text style={styles.label}>DATE</Text>
      <Text style={styles.value}>{appointment.date}</Text>
      <Text style={styles.label}>TIME</Text>
      <Text style={styles.value}>{appointment.time}</Text>
    </View>
    <View style={styles.detailRow}>
      <Ionicons name="person-circle" size={40} color="gray" />
      <View style={styles.doctorInfo}>
        <Text style={styles.doctorName}>{appointment.doctor.name}</Text>
        <Text style={styles.doctorSpecialization}>
          {appointment.doctor.specialization}
        </Text>
      </View>
      <View style={styles.iconsRow}>
        <Ionicons name="call-outline" size={24} color="blue" />
        <Ionicons
          name="chatbubble-ellipses-outline"
          size={24}
          color="blue"
          style={{ marginLeft: 16 }}
        />
      </View>
    </View>
  </View>
);

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Upcoming");

  const filteredAppointments = appointments.filter((appointment) =>
    selectedTab === "Upcoming"
      ? appointment.status !== "PAST"
      : appointment.status === "PAST"
  );

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Appointments" />
      </Appbar.Header>
      <View style={styles.container}>
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === "Upcoming" && styles.activeTabButton,
            ]}
            onPress={() => setSelectedTab("Upcoming")}
          >
            <Text
              style={[
                styles.tabButtonText,
                selectedTab === "Upcoming" && styles.activeTabButtonText,
              ]}
            >
              Upcoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === "History" && styles.activeTabButton,
            ]}
            onPress={() => setSelectedTab("History")}
          >
            <Text
              style={[
                styles.tabButtonText,
                selectedTab === "History" && styles.activeTabButtonText,
              ]}
            >
              History
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={filteredAppointments}
          renderItem={({ item }) => <AppointmentCard appointment={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </>
  );
};

const Schedules = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#d4eecb",
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#ffffff",
  },
  activeTabButton: {
    backgroundColor: "#d4eecb",
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  activeTabButtonText: {
    color: "blue",
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  status: {
    color: "red",
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    color: "#888888",
    marginRight: 16,
  },
  value: {
    fontSize: 14,
    color: "#000000",
    marginRight: 24,
  },
  doctorInfo: {
    flex: 1,
    marginLeft: 16,
  },
  doctorName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  doctorSpecialization: {
    fontSize: 12,
    color: "#888888",
  },
  iconsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Schedules;
