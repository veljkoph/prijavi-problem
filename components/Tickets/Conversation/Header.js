import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { informationsStyle } from "../../../styles/home/informationsStyle";
import { useNavigation } from "@react-navigation/native";
import { conversationStyle } from "../../../styles/tickets/coversationStyle";

const Header = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={conversationStyle.separator} />
      <Text style={conversationStyle.headerTitle}>DETALJI PRIJAVE </Text>
      <TouchableOpacity
        style={conversationStyle.headerBtn}
        onPress={() => navigation.navigate("MyTickets")}
      >
        <Image source={require("../../../assets/icons/arrowLeft.png")} />
        <Text style={conversationStyle.headerSubTitle}>
          Nazad na moje prijave
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Header;
