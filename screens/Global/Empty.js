import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { Colors } from "../../constants/Colors";

const Empty = ({ text }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <LottieView
        style={{
          height: 200,
          width: 200,
        }}
        source={require("../../assets/animations/empty.json")}
        autoPlay={true}
        loop={true}
        speed={1.5}
      />
      <Text
        style={{
          color: Colors.greenDark,
          fontFamily: "Lato-Italic",
          fontSize: 23,
          textAlign: "center",
          lineHeight: 35,
          marginTop: 10,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default Empty;
