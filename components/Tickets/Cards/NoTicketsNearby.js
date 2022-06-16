import { View, Text } from "react-native";
import React from "react";
import Processing from "../Status/Processing";
import { ticketStyle } from "../../../styles/tickets/ticketStyle";
import { globalStyle } from "../../../styles/global/globalStyle";
import LottieView from "lottie-react-native";

const NoTicketsNearby = () => {
  return (
    <View style={ticketStyle.card}>
      <LottieView
        style={ticketStyle.noTicketsAnim}
        source={require("../../../assets/animations/empty.json")}
        autoPlay={true}
        loop={true}
        speed={1.5}
      />
      <View style={globalStyle.spaceBetween}>
        <Text style={ticketStyle.title}>Nema prijava u blizini</Text>
        <Text style={ticketStyle.subtitle}>
          Mozete dodati prijavu u formi ispod
        </Text>
      </View>
    </View>
  );
};

export default NoTicketsNearby;
