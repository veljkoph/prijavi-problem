import { View, Text } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ticketStyle } from "../../../styles/tickets/ticketStyle";
import { Colors } from "../../../constants/Colors";

const Arrived = () => {
  return (
    <View style={ticketStyle.statusContainer}>
      <View style={ticketStyle.iconWrapper}>
        <Ionicons color={Colors.darkGrey} name="time-outline" size={20} />
      </View>
      <Text style={{ color: Colors.darkGrey, fontFamily: "Roboto-Regular" }}>
        PRISTIGLA PRIJAVA
      </Text>
    </View>
  );
};

export default Arrived;
