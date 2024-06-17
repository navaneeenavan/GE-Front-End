import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw, { style } from "twrnc";
import { Appbar } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

interface PatientsCardProps {
  name: string;
  image_uri: string;
  age: number;
  gender: string;
  HealthCondition: string;
  CriticalityScore: number;
  Criticality: string;
}

interface StaffsCardProps {
  name: string;
  image_uri: string;
  StaffID: number;
}

const HeartRateIcon = () => {
  return <FontAwesomeIcon icon={faHeart} size={24} color="red" />;
};

const TemperatureIcon = () => {
  return <FontAwesomeIcon icon={faThermometerHalf} size={24} color="orange" />;
};

const BloodPressureIcon = () => {
  return <FontAwesomeIcon icon={faDroplet} size={24} color="blue" />;
};

function PatientsCard({
  name,
  image_uri,
  age,
  gender,
  HealthCondition,
  CriticalityScore,
  Criticality,
}: PatientsCardProps) {
  return (
    <SafeAreaView
      style={tw`pb-[10] pl-[10] pr-[10]  w-5/5 bg-[#FFF6F6] rounded-xl shadow`}
    >
      <View style={tw`flex flex-row items-center mt-[-25]`}>
        <Image source={{ uri: image_uri }} style={tw`w-16 h-16 rounded-full`} />
        <View style={tw`ml-4 flex-1`}>
          <Text style={tw`text-lg font-semibold text-black`}>{name}</Text>
          <Text style={tw`text-gray-700 mt-1`}>
            Age: {age} {gender}
          </Text>
          <Text style={tw`text-gray-700`}>{HealthCondition}</Text>
          <Text style={tw`text-gray-700`}>
            Criticality Score: {CriticalityScore}
          </Text>
        </View>
        <View style={tw`bg-white border border-red-500 rounded-full px-3 py-1`}>
          <Text style={tw`text-red-500 font-semibold`}>{Criticality}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
function StaffsCard({ name, StaffID, image_uri }: StaffsCardProps) {
  return (
    <SafeAreaView
      style={tw`pb-[10] pl-[10] pr-[10]  w-5/5 bg-[#FFF6F6] rounded-xl shadow`}
    >
      <View style={tw`flex flex-row items-center mt-[-25]`}>
        <Image source={{ uri: image_uri }} style={tw`w-16 h-16 rounded-full`} />
        <View style={tw`ml-4 flex-1`}>
          <Text style={tw`text-lg font-semibold text-black`}>{name}</Text>
          <Text style={tw`text-gray-700 mt-1`}>Staff ID: {StaffID}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const PatientData = {
  name: "Sarah Chang",
  age: 39,
  gender: "Female",
  HealthCondition: "Severe Sepsis",
  CriticalityScore: 9.4,
  Criticality: "Critical",
  image_uri: "https://via.placeholder.com/60",
};

const nurseData = {
  name: "Nurse 1",
  StaffID: 1,
  image_uri: "https://via.placeholder.com/60",
};

const index = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const array = [1, 2, 3];
  const Equipments = [
    "ICU ROOM",
    "VENTILATOR",
    "IV PUMP",
    "ANTIBIOTICS",
    "VASOPRESSORS",
  ];
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Resource Allocation" />
      </Appbar.Header>
      <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingVertical: 20,
            paddingHorizontal: 20,
            backgroundColor: "#F2F2F2",
          }}
        >
          <PatientsCard
            name={PatientData.name}
            image_uri={PatientData.image_uri}
            age={PatientData.age}
            gender={PatientData.gender}
            HealthCondition={PatientData.HealthCondition}
            CriticalityScore={PatientData.CriticalityScore}
            Criticality={PatientData.Criticality}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              gap: 50,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Staffs
            </Text>
            <MaterialCommunityIcons
              name="pencil-outline"
              size={24}
              color="black"
              style={{ marginTop: 20 }}
            />
          </View>
          <View
            style={{
              gap: 10,
              width: "100%",
            }}
          >
            {array.map((item, index) => (
              <StaffsCard
                key={index}
                name={nurseData.name}
                image_uri={nurseData.image_uri}
                StaffID={nurseData.StaffID}
              />
            ))}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              gap: 100,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 20,

                marginBottom: 10,
              }}
            >
              Equipments
            </Text>
            <MaterialCommunityIcons
              name="pencil-outline"
              size={24}
              color="black"
              style={{ marginTop: 20 }}
            />
          </View>
          <View
            style={{
              gap: 10,
              width: "100%",
            }}
          >
            {Equipments.map((item, index) => renderEquipmentTile(item, index))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  tileStyle: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
    paddingLeft: 40,
    gap: 20,
    backgroundColor: "#FFF6F6",
    borderRadius: 20,
    marginBottom: 10,
  },
});

{
  /* <View style={styles.tileStyle}>
            <HeartRateIcon />
            <Text style={{ fontSize: 18 }}>98 bpm</Text>
          </View>
          <View style={styles.tileStyle}>
            <TemperatureIcon />
            <Text style={{ fontSize: 18 }}>36.5 C</Text>
          </View>
          <View style={styles.tileStyle}>
            <BloodPressureIcon />
            <Text style={{ fontSize: 18 }}>120/80 mmHg</Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Analysis {">"}
            </Text>
          </TouchableOpacity>   
        </View> */
}
function renderEquipmentTile(item: string, index: number) {
  return (
    <View style={styles.tileStyle}>
      <HeartRateIcon />
      <Text style={{ fontSize: 18 }}>{item}</Text>
    </View>
  );
}
