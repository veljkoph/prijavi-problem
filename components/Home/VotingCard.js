import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
import { votingCardStyle } from "../../styles/home/votingCardStyle";
const VotingCard = () => {
  return (
    <TouchableOpacity style={votingCardStyle.container}>
      <View>
        <View style={votingCardStyle.upperContainer}>
          <Text style={votingCardStyle.title}>ANKETE</Text>

          <Ionicons color={Colors.green} name="checkmark-circle" size={25} />
        </View>
        <View style={votingCardStyle.line} />
        <Text style={votingCardStyle.newsTitle}>NEKA ANKETA</Text>
        <Text style={votingCardStyle.date}>01.01.2001-20.20.2023</Text>
        <Text style={votingCardStyle.desc}>
          U periodu od 00.00 do 00.00.0000, zbog obavljanja popravki, biće
        </Text>
      </View>

      <Text style={votingCardStyle.showMore}>
        SAZNAJTE VIŠE &gt; &gt; &gt;{" "}
      </Text>
    </TouchableOpacity>
  );
};

export default VotingCard;
