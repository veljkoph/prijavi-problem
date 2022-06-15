import { Text, TouchableOpacity, Image, View } from "react-native";
import React from "react";
import { ticketStyle } from "../../styles/tickets/ticketStyle";
import Rejected from "./Status/Rejected";
import Resolved from "./Status/Resolved";
import Processing from "./Status/Processing";
import { useQuery } from "react-query";
import Arrived from "./Status/Arrived";
import { globalStyle } from "../../styles/global/globalStyle";
//statusi arrived, processing, resolved, rejected

const TicketCard = ({ item }) => {
  const { data, error, isLoading } = useQuery(["image", item.thumbnail], () =>
    axiosFetch(
      { url: `/${item?.thumbnail?.path}` },
      {
        enabled: !ritem?.thumbnail,
      }
    )
  );

  const components = {
    resolved: <Resolved />,
    rejected: <Rejected />,
    processing: <Processing />,
    arrived: <Arrived />,
  };

  const StatusComponent = () => (item ? components[item?.status] : null);
  return (
    <TouchableOpacity style={ticketStyle.card}>
      <Image
        style={ticketStyle.image}
        source={{ uri: `data:image/jpeg;base64,${data?.data}` }}
      />
      <View style={globalStyle.spaceBetween}>
        <Text style={ticketStyle.title}>{item?.address}</Text>
        <Text style={ticketStyle.subtitle}>{item?.short_description}</Text>
        {components[item?.status] && <StatusComponent />}
      </View>
    </TouchableOpacity>
  );
};

export default TicketCard;
