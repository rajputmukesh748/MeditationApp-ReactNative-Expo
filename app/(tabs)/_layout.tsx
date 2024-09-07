import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import React from "react";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="flower-tulip"
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="affirmations"
        options={{
          tabBarLabel: "Affirmation",
          tabBarIcon: ({ color }) => {
            return <Entypo name="open-book" size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
