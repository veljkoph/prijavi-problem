import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const LeafLoader = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LottieView
        style={{
          height: 100,
          width: 100,
        }}
        source={require("../../assets/animations/leafLoader.json")}
        autoPlay={true}
        loop={true}
        speed={1.5}
      />
    </View>
  );
};

export default LeafLoader;
