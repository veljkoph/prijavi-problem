import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import useAuth from "../../hooks/useAuth";
import { globalStyle } from "../../styles/global/globalStyle";
import { profileInfoStyle } from "../../styles/home/profileInfoStyle";
import { LinearGradient } from "expo-linear-gradient";
import { Gradient } from "../../constants/Gradients";
import LottieView from "lottie-react-native";
const UserInfo = ({ navigation }) => {
  const { user } = useAuth();
  return (
    <View style={[globalStyle.shadow1, profileInfoStyle.container]}>
      {/* <LinearGradient
        colors={Gradient.creamGradient}
        start={[0.1, 1]}
        end={[0, 0]}
        location={[0, 1]}
        style={profileInfoStyle.gradient}
      /> */}
      <View style={profileInfoStyle.paddingText}>
        <Text style={profileInfoStyle.title}>Dobro došli,</Text>
        <Text style={profileInfoStyle.name}>{user?.data?.name}</Text>
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
          source={{
            uri: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          }}
          style={profileInfoStyle.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UserInfo;
