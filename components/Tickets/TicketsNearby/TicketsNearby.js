import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
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
      {isLoading && (
        <ActivityIndicator
          size="large"
          color={Colors.purple}
          style={{ marginTop: 20 }}
        />
      )}
      {data?.data?.data?.map((ticket) => (
        <TicketCard item={ticket} key={ticket.id} />
      ))}
    </View>
  );
};

export default TicketsNearby;
