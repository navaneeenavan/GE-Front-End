import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Share,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";

export default function App() {
  const Navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handlePress = (item: any) => {
    setModalVisible(true);
  };

  useEffect(() => {
    Navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => Navigation.goBack()} />
        <Appbar.Content title="NewStudy" />
      </Appbar.Header>
      <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>
              New Study: Regional Anesthesia for Enhanced Recovery After Surgery
              (ERAS)
            </Text>
            <View style={styles.stats}>
              <View style={styles.stat}>
                <Ionicons name="arrow-up" size={16} color="black" />
                <Text style={styles.statText}>1.2k</Text>
              </View>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.stat}>
                  <Ionicons name="chatbubble-outline" size={16} color="black" />
                  <Text style={styles.statText}>35</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={async () => {
                  try {
                    const result = await Share.share({
                      message: "Check out this link: https://example.com",
                    });
                    if (result.action === Share.sharedAction) {
                      if (result.activityType) {
                        // Shared with activity type of result.activityType
                      } else {
                        // Shared
                        Alert.alert("Link shared successfully");
                      }
                    } else if (result.action === Share.dismissedAction) {
                      // Dismissed
                    }
                  } catch (error: any) {
                    Alert.alert(
                      "An error occurred while sharing the link",
                      error.message
                    );
                  }
                }}
              >
                <View style={styles.stat}>
                  <Ionicons
                    name="share-social-outline"
                    size={16}
                    color="black"
                  />
                  <Text style={styles.statText}>Share</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.paragraph}>
              Exciting findings from a recent study suggest that regional
              anesthesia may play a pivotal role in enhancing recovery after
              surgery (ERAS). This groundbreaking research, led by a team of
              experts at the renowned Johns Hopkins Hospital, sheds new light on
              the potential benefits of regional anesthesia techniques in
              improving postoperative outcomes and patient satisfaction.
            </Text>
            <Text style={styles.paragraph}>
              The study, published in the prestigious Journal of Surgical
              Research, examined the impact of regional anesthesia on various
              aspects of the surgical experience, including pain management,
              opioid consumption, length of hospital stay, and overall recovery
              trajectory. The findings reveal compelling evidence in favor of
              incorporating regional anesthesia into ERAS protocols,
              highlighting its potential to revolutionize perioperative care
              practices.
            </Text>
            <Text style={styles.paragraph}>
              One of the key findings of the study was the significant reduction
              in postoperative pain intensity among patients who received
              regional anesthesia compared to those who underwent general
              anesthesia alone. By targeting specific nerve pathways, regional
              anesthesia techniques such as epidural analgesia and peripheral
              nerve blocks offer precise pain relief while minimizing systemic
              opioid exposure, thus mitigating the
            </Text>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}></Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#d4eecb",
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 8,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  stats: {
    flexDirection: "row",
    marginBottom: 8,
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  statText: {
    marginLeft: 4,
  },
  paragraph: {
    marginBottom: 8,
    lineHeight: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
  },
});
