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

const TicketCard = ({ item, onPress }) => {
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
  if (error) return null;
  const StatusComponent = () => (item ? status[item?.status] : null);

  return (
    <TouchableOpacity style={ticketStyle.card} onPress={() => onPress()}>
      <View style={ticketStyle.cardHeader}>
        <Text style={ticketStyle.createdAt}>{item?.created_at}</Text>
        {status[item?.status] && <StatusComponent />}
      </View>
      {/* <View style={globalStyle.spaceBetween}>
        <Text style={ticketStyle.title}>{item?.address}</Text>
        <Text style={ticketStyle.subtitle}>{item?.short_description}</Text>
        {status[item?.status] && <StatusComponent />}
      </View> */}
      <Text style={ticketStyle.title}>{item?.address}</Text>
      <Text style={ticketStyle.subtitle}>{item?.short_description}</Text>

      {image?.data ? (
        <Image
          style={ticketStyle.image}
          source={{ uri: `data:image/jpeg;base64,${image?.data}` }}
        />
      ) : (
        <View style={ticketStyle.imageWrapper}>
          <Image
            resizeMode="contain"
            style={ticketStyle.placeHolderImage}
            source={require("../../assets/icons/camera.png")}
          />
        </View>
      )}
      <Text style={ticketStyle.showMoreText}>
        Detalji prijave &gt; &gt; &gt;{" "}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(TicketCard);
