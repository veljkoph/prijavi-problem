import { View, Text, Image } from "react-native";
import React from "react";
import { conversationStyle } from "../../../styles/tickets/coversationStyle";
import Arrived from "../Status/Arrived";
import { globalStyle } from "../../../styles/global/globalStyle";
import Resolved from "../Status/Resolved";
import Rejected from "../Status/Rejected";
import Processing from "../Status/Processing";
import TiceketThumbnail from "./TiceketThumbnail";
import TicketImageSmall from "./TicketImageSmall";

const TiceketDetails = ({ ticket }) => {
  const status = {
    resolved: <Resolved />,
    rejected: <Rejected />,
    processing: <Processing />,
    arrived: <Arrived />,
  };

  const StatusComponent = () => (ticket ? status[ticket?.status] : null);

  return (
    <View style={conversationStyle.details}>
      <View style={[globalStyle.rowSpaceBtw]}>
        <View>
          <Text style={conversationStyle.detailsTitle}>{ticket?.address}</Text>
          <Text style={conversationStyle.detailsSubtitle}>
            {ticket?.created_at}
          </Text>
        </View>
        <StatusComponent />
      </View>

      {ticket?.images[0] && <TiceketThumbnail image={ticket?.images[0]} />}
      <View style={globalStyle.rowSpaceBtw}>
        {ticket?.images[1] && <TicketImageSmall image={ticket?.images[1]} />}
        {ticket?.images[2] && <TicketImageSmall image={ticket?.images[2]} />}
      </View>

      <Text style={conversationStyle.title}>{ticket?.address}</Text>
      <Text style={conversationStyle.description}>{ticket?.description}</Text>
    </View>
  );
};

export default TiceketDetails;
