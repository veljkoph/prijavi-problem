import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import useAuth from "../../hooks/useAuth";
import { globalStyle } from "../../styles/global/globalStyle";
import { profileInfoStyle } from "../../styles/home/profileInfoStyle";
import LottieView from "lottie-react-native";

const UserInfo = ({ navigation }) => {
  const { user } = useAuth();

  return (
    <View style={[globalStyle.shadow1, profileInfoStyle.container]}>
      <View style={profileInfoStyle.paddingText}>
        <Text style={profileInfoStyle.title}>Dobro došli,</Text>
        {!user?.data?.name ? (
          <View style={profileInfoStyle.placeholderLine} />
        ) : (
          <Text style={profileInfoStyle.name}>{user?.data?.name}</Text>
        )}

        <Text style={profileInfoStyle.subtitle}>
          Hvala Vam što održavate naš grad!
        </Text>
      </View>

      <TouchableOpacity
        style={profileInfoStyle.imageBtn}
        onPress={() =>
          navigation.navigate("SettingsStack", {
            screen: "Profile",
            params: { id: user?.data?.id },
            initial: false,
          })
        }
      >
        <LottieView
          style={{ height: 105, width: 105 }}
          source={require("../../assets/animations/greenCircle.json")}
          autoPlay={true}
          loop={true}
        />
        <Image
          resizeMode="cover"
          source={{ uri: user?.data?.image }}
          style={profileInfoStyle.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UserInfo;
