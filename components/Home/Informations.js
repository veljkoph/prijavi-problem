import { View, Text, RefreshControl, FlatList } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Gradient } from "../../constants/Gradients";
import { informationsStyle } from "../../styles/home/informationsStyle";
import { useInfiniteQuery } from "react-query";
import { BASE_URL } from "@env";
import axiosFetch from "../../services/axiosFetch";
import AsyncStorage from "@react-native-async-storage/async-storage";
import InformationCard from "./InformationCard";
import DotLoader from "../Animations/DotLoader";
import UserInfo from "./UserInfo";
import { globalStyle } from "../../styles/global/globalStyle";

const Informations = ({ navigation }) => {
  const fetchInformations = async ({ pageParam = 1 }) => {
    const res = await fetch(`${BASE_URL}/news?page=${pageParam}`, {
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
  } = useInfiniteQuery("informations", fetchInformations, {
    getNextPageParam: (last_page, pages) => {
      if (last_page?.meta?.current_page < last_page?.meta?.last_page)
        return last_page?.meta?.current_page + 1;
      return false;
    },
    staleTime: 10000,
  });

  return (
    <View style={informationsStyle.container}>
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
            <UserInfo navigation={navigation} />
            <Text style={informationsStyle.title}>INFORMACIJE</Text>
            <LinearGradient
              colors={Gradient.orangeGradient}
              start={[0.1, 0.9]}
              end={[1, 0]}
              location={[1, 0]}
              style={globalStyle.gradientLine}
            />
          </>
        }
        ListEmptyComponent={!isLoading ? null : <DotLoader />}
        ListFooterComponent={isFetchingNextPage && <DotLoader />}
        ListHeaderComponentStyle={{
          paddingHorizontal: 0,
        }}
        contentContainerStyle={{
          paddingBottom: 84,
        }}
        onEndReachedThreshold={0}
        data={data?.pages?.map((page) => page?.data).flat()}
        renderItem={({ item }) => (
          <InformationCard item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Informations;
