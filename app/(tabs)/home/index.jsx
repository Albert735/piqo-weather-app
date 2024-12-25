import { View, Text, StatusBar, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function home() {
  return (
    <SafeAreaView className="flex-1  bg-[#050505]">
      <StatusBar style="light" />

      <View>
        <View className="flex flex-row items-start justify-between px-5">
          <View className="flex flex-col items-start justify-start gap-3">
            {/* date and current location */}
            <Text className="text-white px-1">22, February 2021</Text>
            <View className="flex flex-row items-center gap-1">
              <EvilIcons name="location" size={22} color="white" />
              <Text className="text-white font-bold">Islambad,</Text>
              <Text className="text-white">Pakistan</Text>
            </View>
          </View>

          <View className="flex flex-row items-center w-[7rem] justify-between gap-5 border border-white rounded-full py-4 px-4">
            <Entypo name="light-up" size={20} color="white" />
            <FontAwesome name="moon-o" size={20} color="white" />
          </View>
        </View>

        {/* weather info  */}

        <View>
          <ImageBackground></ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
}
