import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function home() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#050505]">
      <View>
        <Text className="text-white">home</Text>
      </View>
    </SafeAreaView>
  );
}