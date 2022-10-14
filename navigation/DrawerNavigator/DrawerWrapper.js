import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import useAuth from "../../hooks/useAuth";
import { alertPrompt } from "../../functions/alertPrompt";
import useLogout from "../../hooks/user/useLogout";

const DrawerWrapper = (props) => {
  const { mutate: logout } = useLogout();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <View style={{ position: "relative", marginTop: "20%" }}>
        <TouchableOpacity
          style={{ alignSelf: "flex-end", marginRight: 20 }}
          onPress={() => alertPrompt(logout)}
        >
          <Image
            source={require("../../assets/icons/shutDown.png")}
            style={{ height: 50, aspectRatio: 1 }}
          />
        </TouchableOpacity>
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          position: "relative",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerWrapper;
