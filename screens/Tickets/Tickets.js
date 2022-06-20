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
    <View>
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
            <Text style={informationsStyle.title}>PRIJAVE: </Text>
            <LinearGradient
              colors={Gradient.purpleGradient}
              start={[0.1, 0.8]}
              end={[0, 1]}
              location={[1, 1]}
              style={globalStyle.gradientLine}
            />
          </>
        }
        ListEmptyComponent={
          !isLoading ? (
            <Empty text="Još uvek nema prijava, novu prijavu možete dodati klikom na dugme +" />
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
          paddingHorizontal: 10,
        }}
        onEndReachedThreshold={0}
        data={data?.pages?.map((page) => page?.data).flat()}
        renderItem={({ item }) => (
          <TicketCard
            item={item}
            navigation={navigation}
            onPress={() =>
              navigation.navigate("EditTicket", {
                params: { item: item.id },
                initial: false,
              })
            }
          />
        )}
      />
    </View>
  );
};

export default Tickets;
