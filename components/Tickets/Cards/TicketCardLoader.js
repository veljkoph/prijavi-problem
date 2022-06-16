import { View, Text } from "react-native";
import React from "react";
import Processing from "../Status/Processing";
import { ticketStyle } from "../../../styles/tickets/ticketStyle";
import { globalStyle } from "../../../styles/global/globalStyle";
import LottieView from "lottie-react-native";

const TicketCardLoader = () => {
  return (
    <View style={ticketStyle.card}>
      <LottieView
        style={ticketStyle.image}
        source={require("../../../assets/animations/loaderRing.json")}
        autoPlay={true}
        loop={true}
        speed={1.5}
      />
      <View style={globalStyle.spaceBetween}>
        <Text style={ticketStyle.title}></Text>
        <Text style={ticketStyle.subtitle}></Text>
        <Processing />
      </View>
    </View>
  );
};

export default TicketCardLoader;
