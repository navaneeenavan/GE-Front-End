import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { router } from "expo-router";
interface PatientsCardProps {
  name: string;
  image_uri: string;
  age: number;
  gender: string;
  HealthCondition: string;
  CriticalityScore: number;
  Criticality: string;
}

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
      <TouchableOpacity
        onPress={() => {
          router.push("/Details");
        }}
      >
        <View style={tw`flex flex-row items-center mt-[-25]`}>
          <Image
            source={{ uri: image_uri }}
            style={tw`w-16 h-16 rounded-full`}
          />
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
          <View
            style={tw`bg-white border border-red-500 rounded-full px-3 py-1`}
          >
            <Text style={tw`text-red-500 font-semibold`}>{Criticality}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default PatientsCard;
