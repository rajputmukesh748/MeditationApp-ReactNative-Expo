import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface CustomButtonProps {
  onPress: () => void;
  title: String;
  textStyle?: String;
  containerStyle?: String;
}

const CustomButton = ({
  onPress,
  title,
  textStyle = "",
  containerStyle = "",
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white rounded-xl min-h-[50px] justify-center items-center ${containerStyle}`}
      onPress={onPress}
    >
      <Text className={`font-semibold text-lg w-full text-center ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
