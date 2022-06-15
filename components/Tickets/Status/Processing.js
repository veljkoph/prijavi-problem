import { View, Text } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ticketStyle } from "../../../styles/tickets/ticketStyle";
import { Colors } from "../../../constants/Colors";

const Processing = () => {
  return (
    <View style={ticketStyle.statusContainer}>
      <View style={ticketStyle.iconWrapper}>
        <Ionicons
          color={Colors.blue}
          name="ellipsis-horizontal-circle-outline"
          size={20}
        />
      </View>
      <Text style={{ color: Colors.blue, fontFamily: "Lato-Regular" }}>
        U OBRADI
      </Text>
    </View>
  );
};

export default Processing;
