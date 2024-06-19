import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Header, Button } from "react-native-elements";
import { Icon } from "react-native-paper";

const allTopics = [
  {
    id: "1",
    title: "Real Pixel with Zeplin",
    author: "Leticia Brink",
    replies: 24,
    date: "12 Mar 2018",
    avatar: "https://via.placeholder.com/50",
    liked: true,
    content:
      "Detailed discussion about using Zeplin for pixel-perfect designs.",
  },
  {
    id: "2",
    title: "Invision or Sketch Cloud?",
    author: "Jacky Simons",
    replies: 17,
    date: "14 Mar 2018",
    avatar: "https://via.placeholder.com/50",
    liked: false,
    content:
      "Pros and cons of using Invision vs Sketch Cloud for design collaboration.",
  },
  {
    id: "3",
    title: "Need Help for Github error",
    author: "Jonathon Davi",
    replies: 48,
    date: "13 Mar 2018",
    avatar: "https://via.placeholder.com/50",
    liked: false,
    content:
      "Seeking advice for resolving a specific GitHub error encountered during a project.",
  },
  {
    id: "4",
    title: "Switching from Photoshop",
    author: "Elizabeth Smith",
    replies: 55,
    date: "14 Mar 2018",
    avatar: "https://via.placeholder.com/50",
    liked: true,
    content:
      "Discussion on transitioning from Photoshop to other design tools.",
  },
  {
    id: "5",
    title: "Need UI Designer for Team",
    author: "Russel Wade",
    replies: 41,
    date: "13 Mar 2018",
    avatar: "https://via.placeholder.com/50",
    liked: false,
    content: "Looking for a UI designer to join a growing development team.",
  },
  {
    id: "6",
    title: "Dimag Ki Dahi Kardi",
    author: "Elizabeth Smith",
    replies: 55,
    date: "14 Mar 2018",
    avatar: "https://via.placeholder.com/50",
    liked: false,
    content:
      "A casual discussion on dealing with mental stress during project deadlines.",
  },
];

const featuredTopics = allTopics.filter((topic) => topic.liked);
const mostRecentTopics = allTopics.sort(
  (a, b) => (new Date(b.date) as any) - (new Date(a.date) as any)
);

const ForumScreen = () => {
  const [topics, setTopics] = useState(allTopics);
  const [activeTab, setActiveTab] = useState("Featured Topics");

  const handleTabPress = (tab: any) => {
    setActiveTab(tab);
    if (tab === "Featured Topics") {
      setTopics(featuredTopics);
    } else {
      setTopics(mostRecentTopics);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: "Forum", style: styles.headerText }}
        containerStyle={styles.headerContainer}
      />
      <View style={styles.tabContainer}>
        <Button
          title="Featured Topics"
          buttonStyle={
            activeTab === "Featured Topics"
              ? styles.tabButton
              : styles.tabButtonInactive
          }
          titleStyle={
            activeTab === "Featured Topics"
              ? styles.tabTitle
              : styles.tabTitleInactive
          }
          onPress={() => handleTabPress("Featured Topics")}
        />
        <Button
          title="Most Recent"
          buttonStyle={
            activeTab === "Most Recent"
              ? styles.tabButton
              : styles.tabButtonInactive
          }
          titleStyle={
            activeTab === "Most Recent"
              ? styles.tabTitle
              : styles.tabTitleInactive
          }
          onPress={() => handleTabPress("Most Recent")}
        />
      </View>
      <FlatList
        data={topics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              router.push("/Forums");
            }}
          >
            <View style={styles.topicContainer}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>{item.author}</Text>
                <Text style={styles.replies}>{item.replies} Replies</Text>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.content}>{item.content}</Text>
              </View>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                }}
              >
                <Icon
                  source={item.liked ? "heart" : "heart-outline"}
                  color={item.liked ? "red" : "gray"}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  headerContainer: {
    backgroundColor: "white",
  },
  headerText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  tabButton: {
    backgroundColor: "#4287f5",
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  tabButtonInactive: {
    backgroundColor: "#e0e0e0",
  },
  tabTitle: {
    color: "white",
  },
  tabTitleInactive: {
    color: "black",
  },
  topicContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  author: {
    color: "gray",
  },
  replies: {
    color: "gray",
  },
  date: {
    color: "gray",
  },
  content: {
    color: "black",
    marginTop: 5,
  },
  liked: {
    color: "red",
    fontSize: 20,
  },
  notLiked: {
    color: "gray",
    fontSize: 20,
  },
});

export default ForumScreen;
