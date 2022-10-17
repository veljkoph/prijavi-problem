import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { notificationsStyle } from "../../styles/notifications/notificationsStyle";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={notificationsStyle.header}>
      {/* <StatusBar backgroundColor="#FFF" /> */}
      <Text style={notificationsStyle.headerTitle}>Obaveštenja</Text>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Image
          source={require("../../assets/icons/close.png")}
          style={{ height: 30, width: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
