import AppGradient from "@/components/AppGradient";
import GuidedAffermationGallary from "@/components/GuidedAffermationGallary";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f5a", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold">
            Change your beliefs with affirmations
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((g) => {
              return (
                <GuidedAffermationGallary
                  key={g.title}
                  title={g.title}
                  previews={g.data}
                />
              );
            })}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
