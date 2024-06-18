import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const appointments = [
  {
    id: "1",
    status: "SOON",
    title: "Clinic visit appointment: cardiology",
    date: "01/27/24",
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
    date: "01/31/24",
    time: "11:30 AM",
    doctor: {
      name: "Sharif Allee",
      specialization: "Therapist, PhD",
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
    <View style={styles.cardHeader}>
      <Text style={styles.status}>{appointment.status}</Text>
      <Ionicons name="ellipsis-horizontal" size={24} color="black" />
    </View>
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
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => Navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Check-up schedule</Text>
        <Ionicons name="filter-outline" size={24} color="black" />
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>History</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={appointments}
        renderItem={({ item }) => <AppointmentCard appointment={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
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
    paddingTop: 40,
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
  tabButtonText: {
    fontSize: 16,
    fontWeight: "bold",
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
