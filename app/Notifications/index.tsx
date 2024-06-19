import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const notifications = [
  {
    id: "1",
    time: "10m ago",
    text: "Your recent transaction of $570.00 at Pizzapoint has been successfully completed.",
    type: "transaction",
    amount: "endoscopy",
    place: "Hospital",
  },
  {
    id: "2",
    time: "9:33 AM",
    text: "Your appoinment to Dr. John has been confirmed.",
    type: "paymentRequest",
    amount: "CT SCAN",
    requester: "John",
  },
  {
    id: "3",
    time: "8:10 AM",
    text: "Your recent transaction of $230.00 at Chaishai has been successfully completed.",
    type: "transaction",
    amount: "Endoscopic Ultrasound",
    place: "Chaishai",
  },
  {
    id: "5",
    time: "Yesterday 7:43 PM",
    text: "Your new credit card ending in 2688 has been successfully activated.",
    type: "creditCard",
    cardEnding: "2688",
  },
  {
    id: "6",
    time: "Yesterday 4:18 PM",
    text: "Your account balance has been updated. Current balance: $10,689.37.",
    type: "balanceUpdate",
    balance: "$10,689.37",
  },
  {
    id: "7",
    time: "Apr 26, 2024 at 9:05 AM",
    text: "Exclusive offer for you! Get 1% cashback on your next grocery purchase using your HDFC credit card. T&C apply.",
    type: "offer",
    card: "HDFC credit card",
  },
  {
    id: "8",
    time: "Apr 25, 2024 at 11:45 AM",
    text: "Your bill payment to Electric board has been processed successfully.",
    type: "billPayment",
    place: "Electric board",
  },
];

const NotificationItem = ({ item }: { item: any }) => {
  const renderContent = () => {
    switch (item.type) {
      case "transaction":
        return (
          <Text>
            Your recent report Upload of{" "}
            <Text style={styles.bold}>{item.amount}</Text> at {item.place} has
            been successfully completed.
          </Text>
        );
      case "statement":
        return <Text>{item.text}</Text>;
      case "creditCard":
        return <Text>{item.text}</Text>;
      case "balanceUpdate":
        return <Text>{item.text}</Text>;
      case "offer":
        return <Text>{item.text}</Text>;
      case "billPayment":
        return <Text>{item.text}</Text>;
      default:
        return <Text>{item.text}</Text>;
    }
  };

  return (
    <View style={styles.notificationItem}>
      <Icon name="notifications" size={30} color="#000" />
      <View style={styles.textContainer}>
        {renderContent()}
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  notificationItem: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  time: {
    marginTop: 5,
    color: "gray",
  },
  paymentRequest: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  payButton: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  payButtonText: {
    color: "#fff",
  },
});

export default App;
