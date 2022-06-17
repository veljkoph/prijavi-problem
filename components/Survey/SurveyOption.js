import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { surveysStyle } from "../../styles/surveys/surveysStyle";
import { Colors } from "../../constants/Colors";
import { useQueryClient } from "react-query";

const SurveyOption = ({
  title,
  hasVoted,
  percentage,
  answerId,
  mutate,
  surveyId,
}) => {
  const queryClient = useQueryClient();
  return (
    <TouchableOpacity
      style={surveysStyle.surveyOption}
      onPress={() =>
        mutate(answerId, {
          onSuccess: () => {
            queryClient.invalidateQueries(`survey${surveyId}`);
            queryClient.invalidateQueries(`surveys`);
          },
        })
      }
    >
      <View
        style={{
          position: "absolute",
          backgroundColor: Colors.cream,
          width: hasVoted && percentage ? `${percentage + 21}%` : 0,
          height: "100%",
          left: "-12%",
          transform: [
            {
              skewX: "28deg",
            },
          ],
          overflow: "hidden",
          borderTopLeftRadius: 7,
          borderBottomLeftRadius: 7,
        }}
      />

      <Text style={surveysStyle.surveyOptionText}>{title}</Text>
      <Text style={surveysStyle.surveyPercentageText}>
        {hasVoted ? percentage + "%" : null}
      </Text>
    </TouchableOpacity>
  );
};

export default SurveyOption;
