import { View, Text, RefreshControl, FlatList } from "react-native";
import React from "react";
import Empty from "../Global/Empty";
import { useInfiniteQuery } from "react-query";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DotLoader from "../../components/Animations/DotLoader";
import SurveyCard from "../../components/Survey/SurveyCard";
import { informationsStyle } from "../../styles/home/informationsStyle";
import Error from "../Error/Error";

const Surveys = ({ navigation }) => {
  const fetchSurveys = async ({ pageParam = 1 }) => {
    const res = await fetch(`${BASE_URL}/surveys?page=${pageParam}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: await AsyncStorage.getItem("token"),
      },
    });
    return res.json();
  };
  const {
    isLoading,
    isError,
    data,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
    hasNextPage,
  } = useInfiniteQuery("surveys", fetchSurveys, {
    getNextPageParam: (last_page, pages) => {
      if (last_page?.meta?.current_page < last_page?.meta?.last_page)
        return last_page?.meta?.current_page + 1;
      return false;
    },
    staleTime: 10000,
  });
  if (isError) return <Error />;
  return (
    <FlatList
      refreshControl={
        <RefreshControl
          colors={["#3a37c7", "#6247aa"]}
          refreshing={false}
          onRefresh={refetch}
        />
      }
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={hasNextPage && fetchNextPage}
      ListHeaderComponent={
        <>
          <View style={informationsStyle.separator} />
          <Text style={informationsStyle.title}>MOJA GLASANJA </Text>
          <Text style={informationsStyle.subTitle}>
            Lista aktuelnih tema o kojima se možete izjasniti, {"\n"}zaključno
            sa današnjim datumom
          </Text>
        </>
      }
      ListEmptyComponent={
        !isLoading ? <Empty text="Trenutno nema anketa" /> : <DotLoader />
      }
      ListFooterComponent={isFetchingNextPage && <DotLoader />}
      ListHeaderComponentStyle={{
        paddingHorizontal: 0,
      }}
      contentContainerStyle={{
        paddingBottom: 84,
        paddingHorizontal: 20,
        paddingTop: 10,
        backgroundColor: "#fff",
        flex: 1,
      }}
      onEndReachedThreshold={0}
      data={data?.pages?.map((page) => page?.data).flat()}
      renderItem={({ item }) => (
        <SurveyCard survey={item} navigation={navigation} />
      )}
    />
  );
};

export default Surveys;
