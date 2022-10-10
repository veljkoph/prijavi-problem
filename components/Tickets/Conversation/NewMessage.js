import { View, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import React, { useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../../constants/Colors";
import { conversationStyle } from "../../../styles/tickets/coversationStyle";
import useAuth from "../../../hooks/useAuth";

const NewMessage = ({}) => {
  const { user } = useAuth();

  return (
    <View style={conversationStyle.messageInputContainer}>
      <View style={conversationStyle.messageInputImgWrapper}>
        <Image
          source={{ uri: user?.data?.image }}
          style={conversationStyle.messageInputImg}
          resizeMode="cover"
        />
      </View>

      <TextInput
        multiline={true}
        style={conversationStyle.messageInput}

        //    onChangeText={(text) => setUserMessage(text)}
        //  value={userMessage}
      />
      <TouchableOpacity
        style={conversationStyle.messageSendBtn}
        // onPress={() =>
        //   userMessage &&
        //   sendMessage({
        //     message: userMessage,
        //     user_id: user?.id,
        //     forum_discussion_id: discussionId,
        //   })
        // }
      >
        <Ionicons name="send" size={25} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

export default NewMessage;
