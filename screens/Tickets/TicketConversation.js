import { KeyboardAvoidingView, FlatList, Text } from "react-native";
import React, { useState } from "react";
import { conversationStyle } from "../../styles/tickets/coversationStyle";
import { useHeaderHeight } from "@react-navigation/elements";
import Message from "../../components/Tickets/Conversation/Message";
import Header from "../../components/Tickets/Conversation/Header";
import TiceketDetails from "../../components/Tickets/Conversation/TicketDetails";
import useTicketFetch from "../../hooks/tickets/useTicketFetch";
import NewMessage from "../../components/Tickets/Conversation/NewMessage";

const TicketConversation = ({ route }) => {
  const [userMessage, setUserMessage] = useState();

  const headerHeight = useHeaderHeight();
  const {
    data: ticket,
    isLoading,
    isError,
  } = useTicketFetch(route?.params?.id);

  return (
    <KeyboardAvoidingView
      style={conversationStyle.container}
      behavior={Platform.select({ ios: "padding" })}
      keyboardVerticalOffset={headerHeight}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        // ListEmptyComponent={
        //   !isLoading ? <NoData /> : <ActivityIndicator size="large" />
        // }
        ListHeaderComponent={
          <>
            <Header />
            <TiceketDetails ticket={ticket} />
          </>
        }
        ListHeaderComponentStyle={{
          paddingHorizontal: 0,
        }}
        contentContainerStyle={{
          paddingBottom: 150,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
        onEndReachedThreshold={0}
        data={ticket?.activities}
        renderItem={({ item }) => (
          <Message message={item} address={ticket?.address} />
        )}
      />

      <NewMessage setUserMessage={setUserMessage} userMessage={userMessage} />
    </KeyboardAvoidingView>
  );
};

export default TicketConversation;
