import { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
import { router } from "expo-router";

const ResourceAllocationScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={styles.card}>
            <Text style={styles.title}>Sarah Chang</Text>
            <Text style={styles.details}>Age: 39 Female</Text>
            <Text style={styles.details}>Severe Sepsis</Text>
            <Text style={styles.details}>Criticality Score: 9.4</Text>
            <View style={styles.criticalContainer}>
              <Text style={styles.criticalText}>Critical</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                router.push("/Details/Careplans");
              }}
            >
              <Text style={styles.buttonText}>Show Careplan</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              style={{
                width: 150,
                height: 150,
                borderRadius: 75,
                marginLeft: -160,
                marginTop: 20,
              }}
            />
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ffffff",
  },
  headerText: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
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
});

export default ResourceAllocationScreen;
