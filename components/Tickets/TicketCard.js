import { Text, TouchableOpacity, Image, View } from "react-native";
import React from "react";
import { ticketStyle } from "../../styles/tickets/ticketStyle";
import Rejected from "./Status/Rejected";
import Resolved from "./Status/Resolved";
import Processing from "./Status/Processing";
import { useQuery } from "react-query";

import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
//statusi arrived, processing, resolved, rejected

const TicketCard = ({ item }) => {
  const { data, error, isLoading } = useQuery(["image"], () =>
    axiosFetch({ url: `/${item.thumbnail.path}` })
  );
  console.log(data?.data);
  return (
    <TouchableOpacity style={ticketStyle.card}>
      <Image
        style={ticketStyle.image}
        source={{ uri: `data:image/jpeg;base64,${data?.data}` }}
      />
      <View>
        <Text style={ticketStyle.title}>{item?.address}</Text>
        <Text style={ticketStyle.date}>{item?.created_at}</Text>
        <Processing />
      </View>
    </TouchableOpacity>
  );
};

export default TicketCard;
