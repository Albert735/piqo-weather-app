import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";

export default function search() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-[#050505]">
      <View className="flex flex-col items-center justify-between px-5 mt-3 gap-6">
        <View className="flex flex-row items-center justify-between w-full ">
          <Ionicons
            onPress={() => navigation.goBack()}
            name="chevron-back"
            size={24}
            color="white"
          />
          <Text className="text-white text-[1.5rem]">Search for City</Text>
          <View></View>
        </View>

        {/* searc input  */}
        <View className="flex flex-col items-center justify-center w-full">
          <View className="flex-row items-center bg-white/20 rounded-full py-4 px-4 w-full">
            {/* Search Icon */}
            <Octicons name="search" size={24} color="white" />
            {/* Search Input */}
            <TextInput
              placeholder="Search for City"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              className="text-white ml-3 flex-1"
            />
          </View>
        </View>

        {/* city cards  */}
        <View className="flex flex-col items-center justify-center w-full">
          {/* recent searches  header */}
          <Text className="text-white text-[1rem]">Recent Searches</Text>

          <View className="flex flex-row items-center justify-between w-full mt-3 ">
            <View className="flex flex-col items-center justify-between bg-white/10 rounded-[2rem] py-4 px-4  mt-3">
              <Text className="text-white text-[1rem]">Islamabad</Text>
              <Image
                className="w-[10rem] h-[10rem]"
                resizeMode="contain"
                source={require("../../../assets/images/icon1.png")}
              />
              <View className="flex flex-row items-center justify-center gap-2">
                <Text className="text-white text-[1rem]">22</Text>
                <Text className="text-white text-[1rem]">°C</Text>
                <Text>
                  <Text className="text-white text-[1rem]"> | </Text>
                  <Text className="text-white text-[1rem]">Sunny</Text>
                </Text>
              </View>
            </View>

            <View className="flex flex-col items-center justify-between bg-white/10 rounded-[2rem] py-4 px-4  mt-3">
              <Text className="text-white text-[1rem]">Peshawer</Text>
              <Image
                className="w-[10rem] h-[10rem]"
                resizeMode="contain"
                source={require("../../../assets/images/icon1.png")}
              />
              <View className="flex flex-row items-center justify-center gap-2">
                <Text className="text-white text-[1rem]">22</Text>
                <Text className="text-white text-[1rem]">°C</Text>
                <Text>
                  <Text className="text-white text-[1rem]"> | </Text>
                  <Text className="text-white text-[1rem]">Thunder</Text>
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity className="flex flex-row items-center justify-center mt-5 border border-white/30 rounded-full py-4 px-4 gap-2">
            <Text className="text-white text-[1rem]  ">More Cities</Text>
            <AntDesign name="staro" size={16} color="white" />
          </TouchableOpacity>
        </View>

        {/* details  */}
        <View className="flex flex-row items-center justify-between w-full bg-white/10 rounded-[2rem] py-7 px-6 mt-6  ">
          <View className="flex flex-col items-center justify-center gap-6">
            <View className="flex flex-col items-center justify-center gap-5">
              <Text className="text-white/40 text-[1.3rem] font-bold">
                Precipation
              </Text>
              <Text className="text-white text-[1.2rem]">30%</Text>
            </View>
            <View className="flex flex-col items-center justify-center gap-5">
              <Text className="text-white/40 text-[1.3rem] font-bold">
                Humidity
              </Text>
              <Text className="text-white text-[1.2rem]">30%</Text>
            </View>
          </View>
          {/* hr  */}
          <View className=" border h-full border-white/30 " />
          <Image
            className="absolute right-[9.5rem] -top-10 w-[5rem] h-[5rem]"
            source={require("../../../assets/images/icon2.png")}
          />
          <View className="flex flex-col items-center justify-center gap-6">
            <View className="flex flex-col items-center justify-center gap-5">
              <Text className="text-white/40 text-[1.3rem] font-bold">
                Wind
              </Text>
              <Text className="text-white text-[1.2rem] font-semibold">
                8 km/h
              </Text>
            </View>
            <View className="flex flex-col items-center justify-center gap-5">
              <Text className="text-white/40 text-[1.3rem] font-bold">
                Pressure
              </Text>
              <Text className="text-white text-[1.2rem] font-semibold">
                840hpa
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
