import React from "react";
import TicketsNearby from "../../components/Tickets/TicketsNearby/TicketsNearby";
import { createticketStyle } from "../../styles/createTicket/createticketStyle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import NewTicket from "../../components/Tickets/NewTicket/NewTicket";
import { Platform, View } from "react-native";

const CreateTicket = () => {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <KeyboardAwareScrollView
        contentContainerStyle={createticketStyle.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
      >
        {/* <TicketsNearby /> */}
        <NewTicket />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default CreateTicket;
