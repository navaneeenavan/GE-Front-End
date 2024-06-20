import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Assuming you're using FontAwesome for the gear icon
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={tw`flex-1 bg-gray-200 p-2`}>
        <View
          style={tw`flex-row justify-between items-center bg-[#3872F7] p-4 rounded-xl`}
        >
          <Text style={tw`text-white text-lg font-semibold`}>
            Available Resources
          </Text>
          <TouchableOpacity style={tw`p-2`}>
            <Icon name="cog" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <Card style={tw`my-2 rounded-xl bg-white`}>
          <Card.Content>
            <Text style={tw`text-lg font-semibold mb-2`}>Current Patients</Text>
            <View style={tw`flex-row justify-between px-10`}>
              <View style={tw` flex items-center`}>
                <Text style={tw`text-base text-gray-600`}>Total</Text>
                <View style={tw`flex flex-row`}>
                  <Text style={tw` text-black text-xl font-semibold`}>82 </Text>
                  <Text style={tw` text-black text-xl font-semibold`}> / </Text>
                  <Text style={tw` text-black text-lg `}> 120</Text>
                </View>
              </View>
              <View style={tw` flex items-center`}>
                <Text style={tw`text-base text-gray-600`}>Emergency</Text>
                <View style={tw`flex flex-row`}>
                  <Text style={tw` text-black text-xl font-semibold`}>12 </Text>
                  <Text style={tw` text-black text-xl font-semibold`}> / </Text>
                  <Text style={tw` text-black text-lg `}> 15</Text>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={tw`my-2 rounded-xl bg-white`}>
          <Card.Content>
            <Text style={tw`text-lg font-semibold mb-2`}>Upcoming Admissions</Text>
            <View style={tw`flex-row justify-between px-12`}>
              <View style={tw` flex items-center`}>
                <Text style={tw`text-base text-gray-600`}>Total</Text>
                <View style={tw`flex flex-row`}>
                  <Text style={tw` text-black text-xl font-semibold`}>12 </Text>
                </View>
              </View>
              <View style={tw` flex items-center`}>
                <Text style={tw`text-base text-gray-600`}>Emergency</Text>
                <View style={tw`flex flex-row`}>
                  <Text style={tw` text-black text-xl font-semibold`}>12 </Text>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>

        <View style={tw`flex-row flex-wrap justify-between mt-5 px-1`}>
          {resources.map((resource, index) => (
            <TouchableOpacity
              key={index}
              style={tw`w-5/12 bg-white p-5 rounded-xl mb-4 items-center `}
              onPress={() => handleResourcePress(resource)}
            >
              <Text style={tw`text-base text-gray-600 mb-1`}>
                {resource.label}
              </Text>
              <Text style={tw`text-xl font-semibold text-black`}>
                {resource.value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={tw`bg-[#3872F7] rounded-md py-3 px-4 self-center mt-2`}
        >
          <Text style={tw`text-white font-semibold`}>Manage Resources</Text>
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
            <View
              style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
            >
              <View style={tw`w-72 bg-white rounded-xl p-5 items-center`}>
                <Text style={tw`text-lg font-semibold mb-2`}>
                  {selectedResource.label}
                </Text>
                <Text style={tw`text-xl font-semibold text-black mb-5`}>
                  {selectedResource.value}
                </Text>
                <View style={tw`flex-row justify-between w-32`}>
                  <TouchableOpacity
                    style={tw`bg-black rounded-md py-2 px-4 mx-1`}
                    onPress={decrementValue}
                  >
                    <Text style={tw`text-white font-semibold text-lg`}>-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={tw`bg-black rounded-md py-2 px-4 mx-1`}
                    onPress={incrementValue}
                  >
                    <Text style={tw`text-white font-semibold text-lg`}>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={tw`bg-black rounded-md py-2 px-4 mt-5`}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={tw`text-white font-semibold`}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default AvailableResources;
