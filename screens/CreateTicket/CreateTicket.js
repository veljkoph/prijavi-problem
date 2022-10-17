import React from "react";
import TicketsNearby from "../../components/Tickets/TicketsNearby/TicketsNearby";
import { createticketStyle } from "../../styles/createTicket/createticketStyle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import NewTicket from "../../components/Tickets/NewTicket/NewTicket";
import { Platform, SafeAreaView, ScrollView, View } from "react-native";
import { globalStyle } from "../../styles/global/globalStyle";

const CreateTicket = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyle.safeArea}>
      <KeyboardAwareScrollView
        contentContainerStyle={createticketStyle.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        keyboardVerticalOffset={300}
      >
        {/* <TicketsNearby /> */}
        <ScrollView
          style={{ backgroundColor: "#fff", flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <NewTicket />
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default CreateTicket;
