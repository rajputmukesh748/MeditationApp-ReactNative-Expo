import { GallaryPreviewData } from "@/constants/models/affermationCategory";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";

interface GuidedAffermationGallaryProps {
  title: string;
  previews: GallaryPreviewData[];
}

const GuidedAffermationGallary = ({
  title,
  previews,
}: GuidedAffermationGallaryProps) => {
  return (
    <View className="my-3">
      <View className="mb-2">
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className="h-36 w-32 rounded-md mr-4">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="w-full h-full"
                  />
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default GuidedAffermationGallary;
