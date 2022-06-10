import { View, Text } from "react-native";
import React from "react";
import { informationsStyle } from "../../styles/home/informationsStyle";
import { globalStyle } from "../../styles/global/globalStyle";

const InformationCard = ({ item }) => {
  return (
    <View style={[informationsStyle.card, globalStyle.shadow1]}>
      <Text style={informationsStyle.cardTitle}>{item?.title}</Text>
      <Text style={informationsStyle.cardText}>{item?.short_text}</Text>
    </View>
  );
};

export default InformationCard;
