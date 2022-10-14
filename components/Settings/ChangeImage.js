import { View, TouchableOpacity, Image, Platform } from "react-native";
import React, { useState } from "react";
import axios from "axios";
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
      const formData = new FormData();
      const uriArr = res?.uri?.split(".");
      const fileType = uriArr[uriArr.length - 1];
      formData.append("image", {
        uri: Platform.OS === "ios" ? res?.uri.replace("file://", "") : res?.uri,
        type: `image/${fileType}`,
        name: `profilepicture${user?.name}`,
        //  base64: res?.base64,
      });
      axios
        .post(`${BASE_URL}/update-image`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: await AsyncStorage.getItem("token"),
          },
          transformRequest: (formData) => formData,
        })
        .then((res) => {
          auth();
        })
        .catch((err) => {
          console.log("error");
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
            uri: newImage ? newImage.uri : user?.image,
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
