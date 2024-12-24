import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#050505]">
      <StatusBar style="light" />
      <View>
        <Link href="home" asChild>
          <Text className="text-white">index</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
