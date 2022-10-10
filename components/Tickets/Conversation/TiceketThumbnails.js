import { View, Text, Image } from "react-native";
import React from "react";
import { conversationStyle } from "../../../styles/tickets/coversationStyle";
import { useThumbnailFetch } from "../../../hooks/tickets/useThumbnailFetch";

const TiceketThumbnails = ({ image }) => {
  const {
    data: img,
    isLoading,
    isError,
  } = useThumbnailFetch(image?.thumbnail_path);

  return (
    <View>
      <Image
        style={conversationStyle.thumbnail}
        source={{ uri: `data:image/jpeg;base64,${img?.data}` }}
      />
    </View>
  );
};

export default TiceketThumbnails;
