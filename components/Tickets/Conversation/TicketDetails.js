import { View, Text, Image } from "react-native";
import React from "react";
import { conversationStyle } from "../../../styles/tickets/coversationStyle";
import Arrived from "../Status/Arrived";
import { globalStyle } from "../../../styles/global/globalStyle";
import Resolved from "../Status/Resolved";
import Rejected from "../Status/Rejected";
import Processing from "../Status/Processing";
import TiceketThumbnails from "./TiceketThumbnails";

const TiceketDetails = ({ ticket }) => {
  const status = {
    resolved: <Resolved />,
    rejected: <Rejected />,
    processing: <Processing />,
    arrived: <Arrived />,
  };
  console.log(ticket?.images);
  const StatusComponent = () => (ticket ? status[ticket?.status] : null);

  console.log(ticket?.images.length);
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
      {ticket?.images.map((i, index) => (
        <TiceketThumbnails image={i} key={index} />
      ))}
    </View>
  );
};
///el map ili slidr
export default TiceketDetails;
