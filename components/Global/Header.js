import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { headerStyle } from "../../styles/global/headerStyle";
import HeaderMessageBadge from "../Notifications/HeaderMessageBadge";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";

const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#fff",
      }}
    >
      <View style={headerStyle.container}>
        <Image source={require("../../assets/images/prijavi.png")} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <HeaderMessageBadge />
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{ marginRight: 20 }}
          >
            <Ionicons color={Colors.green} name="reorder-three" size={38} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
