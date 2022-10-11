import { View, Text, Image, ActivityIndicator } from "react-native";
import React from "react";
import { conversationStyle } from "../../../styles/tickets/coversationStyle";
import { useThumbnailFetch } from "../../../hooks/tickets/useThumbnailFetch";
import PhotoLoader from "../../../screens/Global/PhotoLoader";
import { Colors } from "../../../constants/Colors";
import Animated, { FadeIn } from "react-native-reanimated";

const TicketImageSmall = ({ image }) => {
  const { data: img, isLoading, isError } = useThumbnailFetch(image?.path);
  if (isError) return null;
  if (isLoading)
    return (
      <View
        style={[
          conversationStyle.imageS,
          { borderColor: Colors.lightGrey4, borderWidth: 1 },
        ]}
      >
        <PhotoLoader size="large" />
      </View>
    );
  return (
    <Animated.Image
      style={conversationStyle.imageS}
      source={{ uri: `data:image/jpeg;base64,${img?.data}` }}
      entering={FadeIn.duration(1000)}
    />
  );
};

export default TicketImageSmall;
