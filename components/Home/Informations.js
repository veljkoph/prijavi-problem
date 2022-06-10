import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Gradient } from "../../constants/Gradients";
import { informationsStyle } from "../../styles/home/informationsStyle";

const Informations = () => {
  return (
    <View style={informationsStyle.container}>
      <Text style={informationsStyle.title}>INFORMACIJE</Text>
      <LinearGradient
        colors={Gradient.orangeGradient}
        start={[0.1, 0.9]}
        end={[1, 0]}
        location={[1, 0]}
        style={informationsStyle.gradientLine}
      />
    </View>
  );
};

export default Informations;
