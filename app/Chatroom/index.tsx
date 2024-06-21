import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
import { router } from "expo-router";
import { BoltIcon } from "react-native-heroicons/outline";

const ChatRoomsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Emergency Chatroom",
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            router.push("/SmartAssistant");
          }}
        >
          <BoltIcon size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);

  const chatRoomsList = [
    {
      id: "1",
      name: "Emergency Room",
      lastMessage: "Patient admitted with severe injuries.",
      lastMessageTime: "3:30 PM",
    },
    {
      id: "2",
      name: "Surgery Team",
      lastMessage: "Surgery scheduled for 8:00 AM tomorrow.",
      lastMessageTime: "2:15 PM",
    },
    {
      id: "3",
      name: "Pediatrics",
      lastMessage: "New admission in room 12.",
      lastMessageTime: "1:45 PM",
    },
    {
      id: "4",
      name: "Cardiology",
      lastMessage: "Patient stable after the procedure.",
      lastMessageTime: "12:30 PM",
    },
    {
      id: "5",
      name: "Nursing Staff",
      lastMessage: "Shift changes for next week are posted.",
      lastMessageTime: "11:15 AM",
    },
    {
      id: "6",
      name: "Pharmacy",
      lastMessage: "Restocked medications in the inventory.",
      lastMessageTime: "10:45 AM",
    },
    {
      id: "7",
      name: "Radiology",
      lastMessage: "MRI results are ready for review.",
      lastMessageTime: "9:30 AM",
    },
    {
      id: "8",
      name: "Oncology",
      lastMessage: "Discussion on recent patient treatment plans.",
      lastMessageTime: "8:15 AM",
    },
    {
      id: "9",
      name: "Laboratory",
      lastMessage: "Blood test results for patient X are in.",
      lastMessageTime: "7:45 AM",
    },
    {
      id: "10",
      name: "Administration",
      lastMessage: "Meeting at 10:00 AM to discuss new policies.",
      lastMessageTime: "Yesterday",
    },
  ];

  const filteredChatRooms = chatRoomsList.filter((room) =>
    room.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <View style={styles.container}>
        <Searchbar
          placeholder="Search"
          value={searchQuery}
          onChangeText={(query) => setSearchQuery(query)}
          style={styles.searchBar}
        />
        <FlatList
          data={filteredChatRooms}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.chatRoomItem}
              onPress={() => {
                router.push({
                  pathname: "/Chatroom/ChatRoomDetailScreen",
                  params: item,
                });
              }}
            >
              <View style={styles.chatRoomInfo}>
                <Text style={styles.chatRoomName}>{item.name}</Text>
                <Text style={styles.lastMessage}>{item.lastMessage}</Text>
              </View>
              <Text style={styles.lastMessageTime}>{item.lastMessageTime}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  searchBar: {
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  chatRoomItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  chatRoomInfo: {
    flex: 1,
  },
  chatRoomName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lastMessage: {
    color: "gray",
  },
  lastMessageTime: {
    color: "gray",
  },
});

export default ChatRoomsScreen;
