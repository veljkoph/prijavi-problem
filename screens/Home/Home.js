import { View, Text, ScrollView } from "react-native";
import React from "react";
import UserInfo from "../../components/Home/UserInfo";
import ProblemBtn from "../../components/Home/ProblemBtn";
import MainNews from "../../components/Home/MainNews";

const Home = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: "#fff",
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <UserInfo navigation={navigation} />
      {/* <Informations navigation={navigation} /> */}
      <ProblemBtn />
      <MainNews />
    </ScrollView>
  );
};

export default Home;
