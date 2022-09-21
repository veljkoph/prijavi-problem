import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import useAuth from "../../hooks/useAuth";
import { globalStyle } from "../../styles/global/globalStyle";
import { profileInfoStyle } from "../../styles/home/profileInfoStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfilePicture from "./ProfilePicture";
import { Colors } from "../../constants/Colors";

const UserInfo = ({ navigation }) => {
  const { user } = useAuth();

  return (
    <View style={[globalStyle.shadow1, profileInfoStyle.container]}>
      <View style={profileInfoStyle.upperContainer}>
        <ProfilePicture navigation={navigation} />
        <View style={profileInfoStyle.nameWrapper}>
          <Text style={profileInfoStyle.name}>{user?.data?.name}</Text>
        </View>
      </View>
      <View style={profileInfoStyle.bottomContainer}>
        <Text style={profileInfoStyle.welcomeText}>
          Dobro došli na naš portal!
        </Text>
        <Text style={profileInfoStyle.descriptionText}>
          Hvala Vam što brinete o dobrobiti grada i naše zajednice!
        </Text>
        <Text style={profileInfoStyle.messagesText}>
          <Ionicons color={Colors.grey} name="mail" size={15} /> Broj
          nepročitanih poruka: <Text style={profileInfoStyle.redText}> 2</Text>
        </Text>
      </View>
    </View>
  );
};

export default UserInfo;
