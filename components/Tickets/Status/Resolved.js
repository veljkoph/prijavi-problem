import { View, Text } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ticketStyle } from "../../../styles/tickets/ticketStyle";
import { Colors } from "../../../constants/Colors";

const Resolved = () => {
  return (
    <View style={ticketStyle.statusContainer}>
      <View style={ticketStyle.iconWrapper}>
        <Ionicons
          color={Colors.green2}
          name="checkmark-circle-outline"
          size={20}
        />
      </View>
      <Text style={{ color: Colors.green2, fontFamily: "Lato-Regular" }}>
        OBRAĐENO
      </Text>
    </View>
  );
};

export default Resolved;
