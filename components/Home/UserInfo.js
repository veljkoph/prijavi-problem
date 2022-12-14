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
    <View style={[profileInfoStyle.container]}>
      <Image
        source={require("../../assets/icons/profileicon.png")}
        style={profileInfoStyle.profileIcon}
      />
      <View style={profileInfoStyle.upperContainer}>
        <ProfilePicture navigation={navigation} />
        <View style={profileInfoStyle.nameWrapper}>
          <Text style={profileInfoStyle.name}>{user?.name}</Text>
          <View style={profileInfoStyle.greenLine} />
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
          <Ionicons color={Colors.lightGrey4} name="mail" size={22} /> Broj
          nepročitanih poruka:{" "}
          <Text style={profileInfoStyle.redText}>
            {user?.unread_notifications_count}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default UserInfo;
