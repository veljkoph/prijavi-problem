import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { importantCardStyle } from "../../styles/home/importantCardStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
const ImportantCard = () => {
  return (
    <View style={importantCardStyle.container}>
      <View style={importantCardStyle.upperContainer}>
        <Text style={importantCardStyle.title}>VAŽNO</Text>

        <Ionicons color={Colors.orange} name="information-circle" size={25} />
      </View>
      <View style={importantCardStyle.line} />
      <Text style={importantCardStyle.newsTitle}>POPRAVKA ULICA</Text>
      <Text style={importantCardStyle.date}>01.01.2001-20.20.2002</Text>
      <Text style={importantCardStyle.desc}>
        U periodu od 00.00 do 00.00.0000, zbog obavljanja popravki, biće
        zatvorene ulice...
      </Text>
      <TouchableOpacity>
        <Text style={importantCardStyle.showMore}>
          SAZNAJTE VIŠE &gt; &gt; &gt;{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImportantCard;
