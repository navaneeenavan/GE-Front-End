import { router } from "expo-router";
import React, { useState } from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import { Header, Button } from "react-native-elements";
import { Icon } from "react-native-paper";
import tw from "twrnc";

const allTopics = [
  {
    id: "1",
    title: "Real Pixel with Zeplin",
    author: "@Leticia Brink",
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
    author: "@Jacky Simons",
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
    author: "@Jonathon Davi",
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
    author: "@Elizabeth Smith",
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
    author: "@Russel Wade",
    replies: 41,
    date: "13 Mar 2018",
    avatar: "https://via.placeholder.com/50",
    liked: false,
    content: "Looking for a UI designer to join a growing development team.",
  },
  {
    id: "6",
    title: "Dimag Ki Dahi Kardi",
    author: "@Elizabeth Smith",
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
    <View style={tw`flex-1 bg-gray-100`}>
      <Header
        centerComponent={{
          text: "Forum",
          style: tw`text-xl font-bold text-black`,
        }}
        containerStyle={tw`bg-white`}
      />
      <View style={tw`flex-row justify-around mb-2  bg-white py-5`}>
        <Button
          title="Featured Topics"
          buttonStyle={
            activeTab === "Featured Topics"
              ? tw`bg-blue-500 rounded-full px-5`
              : tw`bg-gray-200 rounded-full px-5`
          }
          titleStyle={
            activeTab === "Featured Topics" ? tw`text-white` : tw`text-black`
          }
          onPress={() => handleTabPress("Featured Topics")}
        />
        <Button
          title="Most Recent"
          buttonStyle={
            activeTab === "Most Recent"
              ? tw`bg-blue-500 rounded-full px-5`
              : tw`bg-gray-200 rounded-full px-5`
          }
          titleStyle={
            activeTab === "Most Recent" ? tw`text-white` : tw`text-black`
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
            <View
              style={tw` flex flex-col items-center bg-white p-3 my-1 mx-2 rounded-2xl mt-1`}
            >
              <Image
                source={{ uri: item.avatar }}
                style={tw`w-full h-72 rounded-t-3`}
              />
              <View style={tw`flex-1 `}>
                <Text style={tw`text-lg font-semibold`}>{item.title}</Text>
                <Text style={tw`text-gray-500`}>{item.author}</Text>
                <Text style={tw`text-black mt-1`}>{item.content}</Text>
                <View style={tw`flex flex-row justify-between mt-1`}>
                <Text style={tw`text-gray-500`}>{item.replies} Replies</Text>
                <Text style={tw`text-gray-500`}>{item.date}</Text>
                </View>
                
               
              </View>
              <TouchableOpacity style={tw`absolute right-5 bottom-20`}>
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

export default ForumScreen;
