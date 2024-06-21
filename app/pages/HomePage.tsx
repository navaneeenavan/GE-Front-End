import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Assuming you're using FontAwesome for the gear icon
import { Appbar, Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useNavigation } from "expo-router";

const AvailableResources = () => {
  const [modalVisible, setModalVisible] = useState(false);
  interface Resource {
    label: string;
    value: number;
    total: number;
  }

  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  );
  const navigation = useNavigation();
  const resources: Resource[] = [
    { label: "Beds", value: 120, total: 150 },
    { label: "Equipment", value: 45, total: 120 },
    { label: "Supplies", value: 78, total: 100 },
    { label: "Medications", value: 92, total: 100 },
    { label: "ICU Rooms", value: 25, total: 100 },
    { label: "Ventilators", value: 35, total: 100 },
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
    <>
     <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Hospital Resource" />
      </Appbar.Header>
     <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical>
      <SafeAreaView style={tw`flex-1 bg-gray-200  px-2 h-full`}>


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
            <Text style={tw`text-lg font-semibold mb-2`}>
              Upcoming Admissions
            </Text>
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
            <View
              key={index}
              style={tw`w-5/12 bg-white p-5 rounded-xl mb-4 items-center `}
            >
              <Text style={tw`text-base text-gray-600 mb-1`}>
                {resource.label}
              </Text>
              <Text style={tw`text-xl font-semibold text-black`}>
                {resource.value} / {resource.total}
              </Text>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
    </>
   
  );
};

export default AvailableResources;
