import { View, Text, StatusBar, ImageBackground, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function home() {
  return (
    <SafeAreaView className="flex-1  bg-[#050505]">
      <StatusBar style="light" />

      <View className="gap-5 mt-3 ">
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
        <View className="flex flex-col items-center justify-between px-5 mt-3">
          <Image
            className="h-[20rem] w-[20rem]"
            source={require("../../../assets/images/icon3.png")}
          />
          <View className="flex flex-col items-center justify-between w-full mt-3 gap-5">
            <Text className="text-white text-[1.5rem] font-semibold">
              Thunder
            </Text>
            <Text className="text-white text-[4rem] font-bold">13°C</Text>
          </View>
        </View>

        {/* forecast  */}
        <View className="flex flex-row items-center justify-between px-5 mt-3">
          <View className="flex flex-col items-center justify-center gap-3">
            <Image
              className="h-[4rem] w-[4rem]"
              source={require("../../../assets/images/sun.png")}
            />
            <Text className="text-white text-[1rem]">Sunny</Text>
            <Text className="text-white text-[1.2rem] font-bold">13°C</Text>
            <Text className="text-white text-[1rem]">02:00 PM</Text>
          </View>
          <View className="flex flex-col items-center justify-center gap-3">
            <Image
              className="h-[4rem] w-[4rem]"
              source={require("../../../assets/images/tonado.png")}
            />
            <Text className="text-white text-[1rem]">Windy</Text>
            <Text className="text-white text-[1.2rem] font-bold">16°C</Text>
            <Text className="text-white text-[1rem]">03:00 PM</Text>
          </View>
          <View className="flex flex-col items-center justify-center gap-3">
            <Image
              className="h-[4rem] w-[4rem]"
              source={require("../../../assets/images/icon2.png")}
            />
            <Text className="text-white text-[1rem]">Thunder</Text>
            <Text className="text-white text-[1.2rem] font-bold">1°C</Text>
            <Text className="text-white text-[1rem]">04:00 PM</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
