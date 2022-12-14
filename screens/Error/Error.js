import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { Colors } from "../../constants/Colors";

const Error = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 20,
      }}
    >
      <LottieView
        style={{
          height: 250,
          width: 250,
        }}
        source={require("../../assets/animations/error.json")}
        autoPlay={true}
        loop={true}
        speed={1}
      />
      <Text
        style={{
          fontSize: 22,
          fontFamily: "Roboto-Medium",
          color: Colors.red,
          textAlign: "center",
        }}
      >
        Izvinjavamo se,{"\n"} došlo je do greške.{"\n"} Molimo pokušajte kasnije
      </Text>
    </View>
  );
};

export default Error;
