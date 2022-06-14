import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import axiosFetch from "../../services/axiosFetch";
import { useQuery, useQueryClient } from "react-query";
import { informationsStyle } from "../../styles/home/informationsStyle";
import LeafLoader from "../Global/LeafLoader";
import Error from "../Error/Error";

const Information = ({ route }) => {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery(
    ["informations", route?.params?.id],
    () =>
      axiosFetch(
        { url: `/news/${route?.params?.id}` },
        {
          initialData: () => {
            return queryClient
              .getQueryData("informations")
              ?.pages?.map((page) => page?.data)
              .flat()
              .find((d) => d.id == route?.params?.id);
          },

          staleTime: 11000,
        }
      )
  );

  if (error) return <Error />;
  if (isLoading) return <LeafLoader />;
  return (
    <ScrollView>
      <Image
        style={informationsStyle.coverImage}
        source={{
          uri: data?.data?.data?.image,
        }}
      />
      <View style={informationsStyle.articleTextContainer}>
        <Text style={informationsStyle.articleTitle}>
          {data?.data?.data?.title}
        </Text>
        <Text style={informationsStyle.articleLightText}>
          {data?.data?.data?.created_at}
        </Text>
        <Text style={informationsStyle.articleText}>
          {data?.data?.data?.text}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Information;
