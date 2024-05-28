import { Image, StyleSheet, Platform, Text, View, ViewBase, SafeAreaView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';

export default function HomeScreen() {
  return (
   <View>
    <SafeAreaView>
     <Text className="text-3xl">Hello</Text>
    </SafeAreaView>
  
   </View>
  );
}


