import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
import { votingCardStyle } from "../../styles/home/votingCardStyle";
import { useNavigation } from "@react-navigation/native";
import useLastSurvey from "../../hooks/home/useLastSurvey";
const VotingCard = () => {
  const navigation = useNavigation();

  const { data: survey, isError, isLoading } = useLastSurvey();
  if (isError) return null;
  return (
    <TouchableOpacity
      style={votingCardStyle.container}
      onPress={() =>
        navigation.navigate("Survey", {
          screen: "SurveyDetails",
          params: { id: survey?.id },
        })
      }
    >
      <View>
        <View style={votingCardStyle.upperContainer}>
          <Text style={votingCardStyle.title}>ANKETE</Text>

          <Ionicons color={Colors.green} name="checkmark-circle" size={25} />
        </View>
        <View style={votingCardStyle.line} />
        <Text style={votingCardStyle.date}>{survey?.created_at}</Text>
        <Text style={votingCardStyle.newsTitle}>{survey?.title}</Text>

        <Text style={votingCardStyle.desc}>{survey?.description}</Text>
      </View>

      <Text style={votingCardStyle.showMore}>
        SAZNAJTE VIŠE &gt; &gt; &gt;{" "}
      </Text>
    </TouchableOpacity>
  );
};

export default VotingCard;
