import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { surveysStyle } from "../../styles/surveys/surveysStyle";
import HasVoted from "./HasVoted";
import NotVoted from "./NotVoted";
const SurveyCard = ({ survey, navigation }) => {
  return (
    <TouchableOpacity
      style={surveysStyle.card}
      onPress={() => navigation.navigate("SurveyDetails", { id: survey.id })}
    >
      <View style={surveysStyle.cardTextWrapper}>
        <Text style={surveysStyle.date}>{survey?.created_at}</Text>
        <Text style={surveysStyle.cardTitle}>{survey?.title}</Text>
        <Text style={surveysStyle.cardSubtitle}>{survey?.description}</Text>
      </View>
      {survey?.has_answered ? <HasVoted /> : <NotVoted />}
    </TouchableOpacity>
  );
};

export default SurveyCard;
