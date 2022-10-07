import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { createticketStyle } from "../../../styles/createTicket/createticketStyle";

const RemoveImgBtn = ({ onPressAction }) => {
  return (
    <TouchableOpacity
      style={createticketStyle.removeImage}
      onPress={onPressAction}
    >
      <Image
        style={createticketStyle.removeImageIcon}
        source={require("../../../assets/icons/close.png")}
      />
    </TouchableOpacity>
  );
};

export default RemoveImgBtn;
