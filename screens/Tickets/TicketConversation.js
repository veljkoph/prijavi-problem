import {
  KeyboardAvoidingView,
  FlatList,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React, { useRef, useState } from "react";
import { conversationStyle } from "../../styles/tickets/coversationStyle";
import { useHeaderHeight } from "@react-navigation/elements";
import Message from "../../components/Tickets/Conversation/Message";
import Header from "../../components/Tickets/Conversation/Header";
import TiceketDetails from "../../components/Tickets/Conversation/TicketDetails";
import useTicketFetch from "../../hooks/tickets/useTicketFetch";
import NewMessage from "../../components/Tickets/Conversation/NewMessage";
import LeafLoader from "../Global/LeafLoader";
import Error from "../Error/Error";
import DotLoader from "../../components/Animations/DotLoader";
import { globalStyle } from "../../styles/global/globalStyle";

const TicketConversation = ({ route }) => {
  const [userMessage, setUserMessage] = useState();

  const headerHeight = useHeaderHeight();
  const {
    data: ticket,
    isLoading,
    isError,
  } = useTicketFetch(route?.params?.id);
  const listRef = useRef();
  if (isLoading)
    return (
      <View style={globalStyle.center}>
        <DotLoader />
      </View>
    );
  if (isError) return <Error />;
  return (
    <SafeAreaView style={globalStyle.safeArea}>
      <KeyboardAvoidingView
        style={conversationStyle.container}
        //  keyboardVerticalOffset={headerHeight}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <FlatList
          ref={listRef}
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
          contentContainerStyle={{
            paddingBottom: 20,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
          onEndReachedThreshold={0}
          data={ticket?.activities}
          renderItem={({ item }) => (
            <Message message={item} address={ticket?.address} />
          )}
        />
        <NewMessage
          setUserMessage={setUserMessage}
          userMessage={userMessage}
          ticketID={ticket?.id}
          listRef={listRef}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TicketConversation;
