import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const ResourceAllocationScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          size={24}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.headerText}>Resource allocation</Text>
      </View>
      <View style={styles.patientContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          style={styles.patientImage}
        />
        <View style={styles.patientInfo}>
          <Text style={styles.patientName}>Sarah Chang</Text>
          <Text style={styles.patientDetails}>Age: 39 Female</Text>
          <Text style={styles.patientDetails}>Severe Sepsis</Text>
          <Text style={styles.patientDetails}>Criticality Score: 9.4</Text>
        </View>
        <View style={styles.criticalBadgeContainer}>
          <Text style={styles.criticalBadge}>Critical</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Staffs</Text>
        <Icon
          name="edit"
          size={20}
          containerStyle={styles.editIcon}
          onPress={() => {
            /* Add edit action */
          }}
        />
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            style={styles.itemImage}
          />
          <View style={styles.itemInfo}>
            <Text style={styles.itemText}>Nurse: Ananya Chavan</Text>
            <Text style={styles.itemSubText}>Staff ID: 22591</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            style={styles.itemImage}
          />
          <View style={styles.itemInfo}>
            <Text style={styles.itemText}>Nurse: Vivaan Kapoor</Text>
            <Text style={styles.itemSubText}>Staff ID: 24932</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Equipment</Text>
        <Icon
          name="edit"
          size={20}
          containerStyle={styles.editIcon}
          onPress={() => {
            /* Add edit action */
          }}
        />
        <View style={styles.itemContainer}>
          <Icon
            name="bed"
            type="font-awesome-5"
            size={24}
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>ICU Room 1</Text>
        </View>
        <View style={styles.itemContainer}>
          <Icon
            name="heartbeat"
            type="font-awesome-5"
            size={24}
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>Ventilator</Text>
        </View>
        <View style={styles.itemContainer}>
          <Icon
            name="prescription-bottle"
            type="font-awesome-5"
            size={24}
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>IV Pump</Text>
        </View>
        <View style={styles.itemContainer}>
          <Icon
            name="pills"
            type="font-awesome-5"
            size={24}
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>Antibiotics</Text>
        </View>
        <View style={styles.itemContainer}>
          <Icon
            name="syringe"
            type="font-awesome-5"
            size={24}
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>Vasopressors</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  contentContainer: {
    paddingVertical: 60,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#c1e0b5",
  },
  headerText: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  patientContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
  patientImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  patientInfo: {
    flex: 1,
  },
  patientName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  patientDetails: {
    fontSize: 14,
    color: "#666",
  },
  criticalBadgeContainer: {
    alignSelf: "flex-start",
  },
  criticalBadge: {
    backgroundColor: "#f8d7da",
    color: "#c0392b",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#c0392b",
    fontWeight: "bold",
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
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  itemInfo: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
  },
  itemSubText: {
    fontSize: 14,
    color: "#666",
  },
  itemIcon: {
    marginRight: 16,
  },
});

export default ResourceAllocationScreen;
