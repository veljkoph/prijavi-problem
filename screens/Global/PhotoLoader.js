import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const PhotoLoader = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <LottieView
        style={{
          height: 70,
          width: 70,
        }}
        source={require("../../assets/animations/photoLoader.json")}
        autoPlay={true}
        loop={true}
        speed={1.5}
      />
    </View>
  );
};

export default PhotoLoader;
