import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { notificationsStyle } from "../../styles/notifications/notificationsStyle";
import { Colors } from "../../constants/Colors";
import useMarkAsRead from "../../hooks/notifications/useMarkAsRead";
import useAuth from "../../hooks/useAuth";

const Notification = ({ n }) => {
  const navigation = useNavigation();
  const { mutate } = useMarkAsRead();

  const onPressHandler = () => {
    mutate({ id: n?.id });
    navigation.navigate("Tickets", {
      screen: "Conversations",
      params: { id: 127 },
    });
  };
  //id: n?.data?.ticketId
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[
        notificationsStyle.message,
        { backgroundColor: n?.is_read ? Colors.white : Colors.blueish },
      ]}
    >
      {!n?.is_read && <View style={notificationsStyle.unReadDot} />}
      <Text style={notificationsStyle.date}>{n?.created_at}</Text>
      <Text style={notificationsStyle.lightText}>{n?.data?.serial_no}</Text>
      <Text style={notificationsStyle.title}>{n?.data?.message}</Text>
    </TouchableOpacity>
  );
};

export default Notification;
