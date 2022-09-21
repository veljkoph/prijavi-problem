import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { profileBtnStyle } from "../../styles/home/problemBtnStyle";
import { useNavigation } from "@react-navigation/native";

const ProblemBtn = () => {
  const navigation = useNavigation();
  return (
    <View style={profileBtnStyle.container}>
      <TouchableOpacity onPress={() => navigation.navigate("CreateTicket")}>
        <Image
          source={require("../../assets/images/prijavibtn.png")}
          style={profileBtnStyle.btn}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={profileBtnStyle.textWrapper}>
        <Text style={profileBtnStyle.blueText}>Pritisnite ovo dugme </Text>
        <Text style={profileBtnStyle.grayText}>
          ako imate nešto da prijavite gradskoj upravi
        </Text>
      </View>
    </View>
  );
};

export default ProblemBtn;
