import { View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import axios from "react-native-axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";
import pickImage from "../../functions/pickImage";
import { profileStyle } from "../../styles/profile/profileStyle";
import { Colors } from "../../constants/Colors";
import { BASE_URL } from "@env";
import useAuth from "../../hooks/useAuth";

const ChangeImage = () => {
  const [newImage, setNewImage] = useState(false);
  const { user, auth } = useAuth();

  const uploadImage = async () => {
    const res = await pickImage();
    if (res) {
      setNewImage(res);
      const data = new FormData();
      const uriArr = res.uri.split(".");
      const fileType = uriArr[uriArr.length - 1];

      data.append("image", {
        uri: Platform.OS === "ios" ? res.uri.replace("file://", "") : res.uri,
        type: `image/${fileType}`,
        name: `profilepicture0`,
      });
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/update-image`,
        data,
        headers: {
          authorization: await AsyncStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      })
        .then((response) => {
          auth();
        })
        .catch((error) => {
          alert(error?.response?.data?.message);
        });
    }
    return;
  };

  return (
    <View style={profileStyle.imageContainer}>
      <TouchableOpacity
        onPress={() => uploadImage()}
        style={profileStyle.imageBtn}
      >
        <Image
          resizeMode="cover"
          style={profileStyle.image}
          source={{
            uri: newImage ? newImage.uri : user?.data?.image,
          }}
        />

        <Ionicons
          style={profileStyle.editImageIcon}
          name="create-outline"
          size={27}
          color={Colors.black2}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ChangeImage;
