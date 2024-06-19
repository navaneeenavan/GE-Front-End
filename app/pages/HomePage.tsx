import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Assuming you're using FontAwesome for the gear icon
import { Card } from "react-native-paper";

const AvailableResources = () => {
  const [modalVisible, setModalVisible] = useState(false);
  interface Resource {
    label: string;
    value: number;
  }

  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  );

  const resources: Resource[] = [
    { label: "Beds", value: 120 },
    { label: "Equipment", value: 45 },
    { label: "Supplies", value: 78 },
    { label: "Medications", value: 92 },
    { label: "ICU Rooms", value: 25 },
    { label: "Ventilators", value: 35 },
    // Add more resources as needed
  ];

  const handleResourcePress = (resource: any) => {
    setSelectedResource(resource);
    setModalVisible(true);
  };

  const incrementValue = () => {
    setSelectedResource((prevState) => {
      if (prevState) {
        return { ...prevState, value: prevState.value + 1 };
      }
      return prevState;
    });
  };

  const decrementValue = () => {
    setSelectedResource((prevState) => {
      if (prevState && prevState.value > 0) {
        return { ...prevState, value: prevState.value - 1 };
      }
      return prevState;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Available Resources</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="cog" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardHeader}>Current Patients</Text>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Total</Text>
              <Text style={styles.value}>82</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Emergency</Text>
              <Text style={styles.value}>12</Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardHeader}>Upcoming Admissions</Text>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Scheduled</Text>
              <Text style={styles.value}>24</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Emergency</Text>
              <Text style={styles.value}>6</Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      <View style={styles.resourcesContainer}>
        {resources.map((resource, index) => (
          <TouchableOpacity
            key={index}
            style={styles.resourceCard}
            onPress={() => handleResourcePress(resource)}
          >
            <Text style={styles.resourceLabel}>{resource.label}</Text>
            <Text style={styles.resourceValue}>{resource.value}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.manageButton}>
        <Text style={styles.manageButtonText}>Manage Resources</Text>
      </TouchableOpacity>

      {selectedResource && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedResource.label}</Text>
              <Text style={styles.modalValue}>{selectedResource.value}</Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={decrementValue}
                >
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={incrementValue}
                >
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  iconButton: {
    padding: 5,
  },
  card: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: "#555",
  },
  value: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  resourcesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  resourceCard: {
    width: "48%",
    backgroundColor: "#e0e0e0",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  resourceLabel: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  resourceValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  manageButton: {
    backgroundColor: "#000",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginTop: 20,
  },
  manageButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  closeButton: {
    backgroundColor: "#000",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AvailableResources;
