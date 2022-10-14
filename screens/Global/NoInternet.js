import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { Colors } from "../../constants/Colors";

const NoInternet = ({ text }) => {
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
        source={require("../../assets/animations/noNetwork.json")}
        autoPlay={true}
        loop={true}
        speed={1.5}
      />
      <Text
        style={{
          color: Colors.grey,
          fontFamily: "Roboto-Medium",
          fontSize: 20,
          textAlign: "center",
          lineHeight: 35,
          marginTop: 10,
        }}
      >
        Nema mrežne veze.{"\n"}
        Povežite se na WIFI ili {"\n"}
        uključite mobilne podatke
      </Text>
    </View>
  );
};

export default NoInternet;
