import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from "react-native";
import { useMutation, useQuery } from "react-query";
import useGeoLocation from "../../../hooks/useGeoLocation";
import LeafLoader from "../../../screens/Global/LeafLoader";
import axiosFetch from "../../../services/axiosFetch";
import { createticketStyle } from "../../../styles/createTicket/createticketStyle";
import TicketCard from "../TicketCard";
import { Colors } from "../../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Gradient } from "../../../constants/Gradients";
import { globalStyle } from "../../../styles/global/globalStyle";
import TicketCardLoader from "../Cards/TicketCardLoader";
import NoTicketsNearby from "../Cards/NoTicketsNearby";
//tickets-nearby
//lat lng

const TicketsNearby = () => {
  const { location } = useGeoLocation();
  const { data, error, isLoading } = useQuery(
    ["sendLocation", location],
    () =>
      axiosFetch({
        url: `/tickets-nearby?lat=${location?.coords.latitude}&lng=${location?.coords.longitude}`,
      }),
    {
      enabled: !!location,
    }
  );

  return (
    <View style={createticketStyle.nearbyTickets}>
      <Text style={createticketStyle.nearbyTicketsTitle}>
        PRIJAVE U BLIZINI
      </Text>
      <LinearGradient
        colors={Gradient.greenGradient}
        start={[0.1, 0.9]}
        end={[1, 0]}
        location={[1, 0]}
        style={globalStyle.gradientLine}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          !isLoading ? <NoTicketsNearby /> : <TicketCardLoader />
        }
        contentContainerStyle={{
          padding: 0,
          margin: 0,
          width: Dimensions.get("window").width,
        }}
        onEndReachedThreshold={0}
        data={data?.data?.data}
        renderItem={({ item }) => <TicketCard item={item} key={item.id} />}
        r
      />
      {console.log(data?.data.data)}
    </View>
  );
};

export default TicketsNearby;
