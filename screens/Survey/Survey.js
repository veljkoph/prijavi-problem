import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axiosFetch from "../../services/axiosFetch";
import SurveyOption from "../../components/Survey/SurveyOption";
import { surveysStyle } from "../../styles/surveys/surveysStyle";
import axiosPost from "../../services/axiosPost";
import LeafLoader from "../Global/LeafLoader";
import { informationsStyle } from "../../styles/home/informationsStyle";
import { conversationStyle } from "../../styles/tickets/coversationStyle";
import { globalStyle } from "../../styles/global/globalStyle";

const Survey = ({ route, navigation }) => {
  const { data, error, isLoading } = useQuery(
    [`survey${route?.params?.id}`, route?.params?.id],
    () => axiosFetch({ url: `/surveys/${route?.params?.id}` }),
    {
      enabled: !!route?.params?.id,
    }
  );
  const {
    isLoading: votingLoad,
    isError,
    mutate,
    data: message,
    error: votingError,
  } = useMutation(async (id) => {
    return axiosPost({
      url: `/surveys/${data?.data?.data?.id}`,
      values: {
        answer_id: id,
      },
    });
  });
  if (isLoading) return <LeafLoader />;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={surveysStyle.container}>
        <View style={informationsStyle.separator} />
        <Text style={informationsStyle.title}>
          {data?.data?.data?.question}
        </Text>
        <Text style={informationsStyle.subTitle}>
          {data?.data?.data?.title}
        </Text>
        <TouchableOpacity
          style={globalStyle.headerBtn}
          onPress={() => navigation.navigate("SurveysHome")}
        >
          <Image
            source={require("../../assets/icons/arrowLeft.png")}
            style={globalStyle.headerArrow}
          />
          <Text style={globalStyle.headerSubTitle}>Nazad na sve ankete</Text>
        </TouchableOpacity>
        {data?.data?.data?.answers?.map((item) => (
          <SurveyOption
            surveyId={data?.data?.data?.id}
            answerId={item.id}
            title={item.title}
            key={item.id}
            hasVoted={data?.data?.data?.has_answered}
            percentage={item.percentage}
            mutate={mutate}
          />
        ))}
        <Text style={surveysStyle.message}>{message?.data?.message}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Survey;
