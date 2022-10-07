import React from "react";
import TicketsNearby from "../../components/Tickets/TicketsNearby/TicketsNearby";
import { createticketStyle } from "../../styles/createTicket/createticketStyle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import NewTicket from "../../components/Tickets/NewTicket/NewTicket";
import { Platform, ScrollView, View } from "react-native";

const CreateTicket = ({ navigation }) => {
  return (
    <ScrollView
      style={{ backgroundColor: "#fff", flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={createticketStyle.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 70}
      >
        {/* <TicketsNearby /> */}
        <NewTicket />
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default CreateTicket;
