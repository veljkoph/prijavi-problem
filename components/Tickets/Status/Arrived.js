import { View, Text } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ticketStyle } from "../../../styles/tickets/ticketStyle";
import { Colors } from "../../../constants/Colors";

const Arrived = () => {
  return (
    <View style={ticketStyle.statusContainer}>
      <View style={ticketStyle.iconWrapper}>
        <Ionicons color={Colors.darkBlue} name="time-outline" size={17} />
      </View>
      <Text
        style={{
          color: Colors.darkBlue,
          fontFamily: "Roboto-Regular",
          fontSize: 14,
        }}
      >
        PRISTIGLA PRIJAVA
      </Text>
    </View>
  );
};

export default Arrived;
