import { View, Text } from "react-native";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axiosFetch from "../../services/axiosFetch";
import SurveyOption from "../../components/Survey/SurveyOption";
import { surveysStyle } from "../../styles/surveys/surveysStyle";
import axiosPost from "../../services/axiosPost";
import LeafLoader from "../Global/LeafLoader";

const Survey = ({ route }) => {
  const queryClient = useQueryClient();

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
    <View style={surveysStyle.container}>
      <Text style={surveysStyle.surveyTitle}>{data?.data?.data?.title}</Text>
      <Text style={surveysStyle.surveyQuestion}>
        {data?.data?.data?.question}
      </Text>
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
  );
};

export default Survey;
