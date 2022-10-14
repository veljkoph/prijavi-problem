import { View, Text, RefreshControl, FlatList } from "react-native";
import React from "react";
import { useInfiniteQuery } from "react-query";
import { LinearGradient } from "expo-linear-gradient";
import { informationsStyle } from "../../styles/home/informationsStyle";
import DotLoader from "../../components/Animations/DotLoader";
import { Gradient } from "../../constants/Gradients";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalStyle } from "../../styles/global/globalStyle";
import TicketCard from "../../components/Tickets/TicketCard";
import Empty from "../Global/Empty";

const Tickets = ({ navigation }) => {
  const fetchTickets = async ({ pageParam = 1 }) => {
    const res = await fetch(`${BASE_URL}/tickets?page=${pageParam}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: await AsyncStorage.getItem("token"),
      },
    });
    return res.json();
  };
  const {
    isLoading,
    data,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
    hasNextPage,
  } = useInfiniteQuery("tickets", fetchTickets, {
    getNextPageParam: (last_page, pages) => {
      if (last_page?.meta?.current_page < last_page?.meta?.last_page)
        return last_page?.meta?.current_page + 1;
      return false;
    },
    staleTime: 10000,
  });

  return (
    <View style={globalStyle.whiteBg}>
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
            <Text style={informationsStyle.title}>MOJE PRIJAVE </Text>
            <Text style={informationsStyle.subTitle}>
              Lista svih prijava sa njihovim statusima, {"\n"}zaključno sa
              današnjim datumom
            </Text>
          </>
        }
        ListEmptyComponent={
          !isLoading ? (
            <Empty text="Još uvek nema prijava, novu prijavu možete dodati klikom na prijavi problem" />
          ) : (
            <DotLoader />
          )
        }
        ListFooterComponent={isFetchingNextPage && <DotLoader />}
        ListHeaderComponentStyle={{
          paddingVertical: 20,
        }}
        contentContainerStyle={{
          paddingBottom: 84,
          paddingHorizontal: 20,
          backgroundColor: "#Fff",
        }}
        onEndReachedThreshold={0}
        data={data?.pages?.map((page) => page?.data).flat()}
        renderItem={({ item }) => (
          <TicketCard
            item={item}
            navigation={navigation}
            onPress={() =>
              navigation.push("Conversations", {
                id: item.id,
              })
            }
          />
        )}
      />
    </View>
  );
};

export default Tickets;
