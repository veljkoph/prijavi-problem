import { View, Text } from "react-native";
import React from "react";
import { surveysStyle } from "../../styles/surveys/surveysStyle";
import { Colors } from "../../constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
const HasVoted = () => {
  return (
    <View style={surveysStyle.cardIsVoted}>
      <Ionicons
        color={Colors.green}
        name="checkmark-circle-outline"
        size={30}
      />
      <Text style={surveysStyle.cardSubtitle}>Glasali ste</Text>
    </View>
  );
};

export default HasVoted;
