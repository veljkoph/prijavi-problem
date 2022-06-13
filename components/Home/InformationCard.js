import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { informationsStyle } from "../../styles/home/informationsStyle";
import { globalStyle } from "../../styles/global/globalStyle";

const InformationCard = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={informationsStyle.card}
      onPress={() => navigation.navigate("Information", { id: item.id })}
    >
      <Image
        style={informationsStyle.image}
        resizeMode="cover"
        source={{
          uri: item?.image,
        }}
      />
      <View>
        <Text style={informationsStyle.cardTitle}>{item?.title}</Text>
        <Text style={informationsStyle.lightText}>{item?.created_at}</Text>
        <Text style={informationsStyle.cardText}>{item?.short_text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(InformationCard);