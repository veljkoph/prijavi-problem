import { View, Text } from "react-native";
import React from "react";
import useAuth from "../../hooks/useAuth";
import UserInfo from "../../components/Home/UserInfo";
import Informations from "../../components/Home/Informations";
import { Colors } from "../../constants/Colors";

const Home = ({ navigation }) => {
  return (
    <View
      style={{ backgroundColor: Colors.white, flex: 1, paddingHorizontal: 10 }}
    >
      {/* <UserInfo navigation={navigation} /> */}
      <Informations navigation={navigation} />
    </View>
  );
};

export default Home;
