import { View, Text } from "react-native";
import React from "react";
import ImportantCard from "./ImportantCard";
import VotingCard from "./VotingCard";

const MainNews = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <ImportantCard />
      <VotingCard />
    </View>
  );
};

export default MainNews;
