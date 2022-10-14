import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
import useAuth from "../../hooks/useAuth";

const HeaderMessageBadge = () => {
  const navigation = useNavigation();
  const { user } = useAuth();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Notifications")}
      style={{ marginRight: 20 }}
    >
      <Ionicons color={Colors.green} name="mail" size={30} />
      {user?.unread_notifications_count != 0 && (
        <View
          style={{
            backgroundColor: Colors.red,
            width: 20,
            height: 20,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: -10,
            top: 14,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#fff",
              fontFamily: "Roboto-Medium",
            }}
          >
            {user?.unread_notifications_count}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default HeaderMessageBadge;
