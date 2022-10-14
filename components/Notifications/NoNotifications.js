import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { Colors } from "../../constants/Colors";

const NoNotifications = () => {
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
          height: 300,
          width: 300,
        }}
        source={require("../../assets/animations/nonotifications.json")}
        autoPlay={true}
        loop={true}
        // speed={1.5}
      />
      <Text
        style={{
          color: Colors.darkBlue,
          fontFamily: "Roboto-Medium",
          fontSize: 18,
          textAlign: "center",
          lineHeight: 35,
          marginTop: 10,
        }}
      >
        Nema novih obaveštenja
      </Text>
    </View>
  );
};

export default NoNotifications;
