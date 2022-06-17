import { Text, TouchableOpacity, Image, View } from "react-native";
import React from "react";
//style
import { globalStyle } from "../../styles/global/globalStyle";
import { ticketStyle } from "../../styles/tickets/ticketStyle";
//components
import Rejected from "./Status/Rejected";
import Resolved from "./Status/Resolved";
import Processing from "./Status/Processing";
import Arrived from "./Status/Arrived";
//query
import { useQuery } from "react-query";

const TicketCard = ({ item }) => {
  const {
    data: image,
    error,
    isLoading,
  } = useQuery(
    ["image", item?.thumbnail?.path],
    () => axiosFetch({ url: `/${item?.thumbnail?.path}` }),
    {
      enabled: !!item?.thumbnail?.path,
    }
  );

  const status = {
    resolved: <Resolved />,
    rejected: <Rejected />,
    processing: <Processing />,
    arrived: <Arrived />,
  };

  const StatusComponent = () => (item ? status[item?.status] : null);
  return (
    <TouchableOpacity style={ticketStyle.card}>
      <View style={globalStyle.spaceBetween}>
        <Text style={ticketStyle.title}>{item?.address}</Text>
        <Text style={ticketStyle.subtitle}>{item?.short_description}</Text>
        {status[item?.status] && <StatusComponent />}
      </View>
      <Image
        style={ticketStyle.image}
        source={
          image?.data
            ? { uri: `data:image/jpeg;base64,${image?.data}` }
            : require("../../assets/images/photoPlaceholder.jpeg")
        }
      />
    </TouchableOpacity>
  );
};

export default TicketCard;
