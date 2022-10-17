import { View, Text, Image } from "react-native";
import { conversationStyle } from "../../../styles/tickets/coversationStyle";
import useAuth from "../../../hooks/useAuth";

const Message = ({ message, address }) => {
  const { user } = useAuth();

  return (
    <View style={conversationStyle.message}>
      {message.direction == 0 ? (
        <Image
          source={require("../../../assets/icons/profileIconGrey.png")}
          style={conversationStyle.messageImage}
          resizeMode="cover"
        />
      ) : (
        <Image
          resizeMode="cover"
          source={{ uri: user?.image }}
          style={conversationStyle.messageImage}
        />
      )}
      <View style={conversationStyle.messageDetails}>
        <View style={conversationStyle.rowSbFlex}>
          {message.direction == 0 ? (
            <Text style={conversationStyle.messageSender}>
              Operater za komunikaciju
            </Text>
          ) : (
            <Text style={conversationStyle.messageSender}>
              Vi: {user?.name}
            </Text>
          )}

          <Text style={conversationStyle.messageSubtitle}>
            {message?.created_at}
          </Text>
        </View>

        {message.direction == 0 ? (
          <Text style={conversationStyle.messageSubtitle}>{address}</Text>
        ) : (
          <Text style={conversationStyle.messageSubtitle}>{message.id}</Text>
        )}
        <Text style={conversationStyle.messageSubtitle}>{message.id}</Text>
        <Text style={conversationStyle.messageText}>{message.message}</Text>
      </View>
    </View>
  );
};

export default Message;
