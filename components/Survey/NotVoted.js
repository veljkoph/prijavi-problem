import { View, Text } from "react-native";
import React from "react";
import { surveysStyle } from "../../styles/surveys/surveysStyle";
import { Colors } from "../../constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
const NotVoted = () => {
  return (
    <View style={surveysStyle.cardIsVoted}>
      <Ionicons
        color={Colors.lightGrey}
        name="checkmark-circle-outline"
        size={30}
      />
      <Text style={surveysStyle.cardSubtitle}>Niste glasali</Text>
    </View>
  );
};

export default NotVoted;
