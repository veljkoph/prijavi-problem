import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { informationsStyle } from "../../styles/home/informationsStyle";

const InformationCard = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={informationsStyle.card}
      onPress={() => navigation.push("Information", { id: item.id })}
    >
      <View style={informationsStyle.textWrapper}>
        <Text style={informationsStyle.cardTitle}>{item?.title}</Text>
        <Text style={informationsStyle.lightText}>{item?.created_at}</Text>
      </View>
      <Image
        style={informationsStyle.image}
        resizeMode="cover"
        source={{
          uri: item?.image,
        }}
      />
    </TouchableOpacity>
  );
};

export default React.memo(InformationCard);
