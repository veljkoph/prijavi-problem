import { TouchableOpacity, Image } from "react-native";
import { profileInfoStyle } from "../../styles/home/profileInfoStyle";
import useAuth from "../../hooks/useAuth";
import LottieView from "lottie-react-native";

const ProfilePicture = ({ navigation }) => {
  const { user } = useAuth();
  return (
    <TouchableOpacity
      style={profileInfoStyle.imageBtn}
      onPress={() =>
        navigation.navigate("Profile", {
          params: { id: user?.data?.id },
          initial: false,
        })
      }
    >
      <LottieView
        style={{ height: 125, width: 125 }}
        source={require("../../assets/animations/greenCircle.json")}
        autoPlay={true}
        loop={true}
      />
      <Image
        resizeMode="cover"
        source={{ uri: user?.image }}
        style={profileInfoStyle.image}
      />
    </TouchableOpacity>
  );
};

export default ProfilePicture;
