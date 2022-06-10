import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { settingsStyle } from "../../styles/settings/settingsStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
const SettingsItem = ({ title, fj, icon }) => {
  return (
    <TouchableOpacity style={settingsStyle.item} onPress={() => fj && fj()}>
      <Text style={settingsStyle.itemText}>{title}</Text>
      <Ionicons name={icon} size={24} color={Colors.greenDarkest} />
    </TouchableOpacity>
  );
};

export default SettingsItem;
