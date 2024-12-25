import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#050505]">
      <StatusBar style="light" />

      <View className="flex-1 items-center justify-between">
        <View></View>
        <View className="flex flex-col items-center justify-center">
          <Text className="text-white text-[3rem] font-bold">Piqo</Text>
        </View>

        <View>
          <Link href="home" asChild>
            <TouchableOpacity className="bg-[#fff] p-2 rounded-full mt-4 w-[22rem] items-center">
              <Text className="text-[#050505] text-[1rem] py-3">
                Get Started
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
