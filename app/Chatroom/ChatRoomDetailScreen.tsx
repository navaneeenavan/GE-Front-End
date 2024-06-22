import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const messages = [
  {
    id: "1",
    sender: "Alice",
    message: "Hello everyone!",
    time: "2:30 PM",
  },
  {
    id: "2",
    sender: "Bob",
    message: "Hi Alice!",
    time: "2:32 PM",
  },
  {
    id: "3",
    sender: "Charlie",
    message: "How's it going?",
    time: "2:34 PM",
  },
  // Add more messages as needed
];

const ChatRoomDetailScreen = () => {
  const route = useRoute();
  const chatRoom = useLocalSearchParams();
  const navigation = useNavigation();
  const [ListofMessages, setListofMessages] = React.useState(messages);
  const [message, setMessage] = React.useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      setListofMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Date.now().toString(),
          sender: "You",
          message: message,
          time: new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }),
        },
      ]);
      setMessage("");
    }
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={chatRoom.name} />
      </Appbar.Header>
      <View style={styles.container}>
        <FlatList
          data={ListofMessages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.messageItem,
                item.sender === "You" ? styles.myMessage : styles.otherMessage,
              ]}
            >
              <Text
                style={[
                  styles.sender,
                  item.sender === "You" ? styles.mySender : styles.otherSender,
                ]}
              >
                {item.sender}
              </Text>
              <Text
                style={[
                  styles.message,
                  item.sender === "You"
                    ? styles.myMessageText
                    : styles.otherMessageText,
                ]}
              >
                {item.message}
              </Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          )}
          contentContainerStyle={styles.flatListContent}
        />
        <KeyboardAvoidingView
          style={styles.inputContainer}

        >
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity
            onPress={handleSendMessage}
            style={styles.sendButton}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  flatListContent: {
    padding: 10,
    paddingBottom: 60, // Adjust padding to avoid overlap with input field
  },
  messageItem: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: "70%",
  },
  myMessage: {
    backgroundColor: "#d1e7ff",
    alignSelf: "flex-end",
  },
  otherMessage: {
    backgroundColor: "white",
    alignSelf: "flex-start",
  },
  sender: {
    fontSize: 14,
    fontWeight: "bold",
  },
  mySender: {
    color: "blue",
  },
  otherSender: {
    color: "black",
  },
  message: {
    fontSize: 16,
  },
  myMessageText: {
    color: "blue",
  },
  otherMessageText: {
    color: "black",
  },
  time: {
    fontSize: 12,
    color: "gray",
    textAlign: "right",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingBottom : 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "white",
    marginBottom: 8
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#4287f5",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ChatRoomDetailScreen;
