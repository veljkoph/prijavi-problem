import { View, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../../constants/Colors";
import { conversationStyle } from "../../../styles/tickets/coversationStyle";
import useAuth from "../../../hooks/useAuth";
import useNewMessage from "../../../hooks/tickets/useNewMessage";
import LeafLoader from "../../../screens/Global/LeafLoader";
import DotLoader from "../../Animations/DotLoader";

const NewMessage = ({ ticketID, listRef }) => {
  const { user } = useAuth();
  const [message, setMessage] = useState("");

  const {
    mutate: send,
    isError,
    isLoading,
  } = useNewMessage({ ticketID, setMessage });

  if (isLoading) return <DotLoader />;
  return (
    <View
      style={conversationStyle.messageInputContainer}
      onLayout={() => listRef.current.scrollToEnd()}
    >
      <View style={conversationStyle.messageInputImgWrapper}>
        <Image
          source={{ uri: user?.image }}
          style={conversationStyle.messageInputImg}
          resizeMode="cover"
        />
      </View>

      <TextInput
        multiline={true}
        style={conversationStyle.messageInput}
        onChangeText={(text) => setMessage(text)}
        value={message}
      />
      <TouchableOpacity
        style={conversationStyle.messageSendBtn}
        onPress={() => message && send({ message })}
      >
        <Ionicons name="send" size={25} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

export default NewMessage;
