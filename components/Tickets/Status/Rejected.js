import { View, Text } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ticketStyle } from "../../../styles/tickets/ticketStyle";
import { Colors } from "../../../constants/Colors";

const Rejected = () => {
  return (
    <View style={ticketStyle.statusContainer}>
      <View style={ticketStyle.iconWrapper}>
        <Ionicons color={Colors.red} name="close-circle-outline" size={20} />
      </View>
      <Text style={{ color: Colors.red, fontFamily: "Lato-Regular" }}>
        ODBIJENO
      </Text>
    </View>
  );
};

export default Rejected;
