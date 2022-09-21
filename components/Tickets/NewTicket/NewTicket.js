import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { useMutation } from "react-query";

//components
import DarkLineInput from "../../Global/DarkLineinput";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Formik } from "formik";
import pickImage from "../../../functions/pickImage";
//style
import { createticketStyle } from "../../../styles/createTicket/createticketStyle";
import { Colors } from "../../../constants/Colors";
import { globalStyle } from "../../../styles/global/globalStyle";
import { BASE_URL } from "@env";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CreationTicketSchema } from "../../../constants/validations/CreationTicketSchema";

const NewTicket = () => {
  const formData = new FormData();

  const { isLoading, isError, mutate, data, error, isSuccess } = useMutation(
    async (values) => {
      return await axios({
        method: "post",
        url: `${BASE_URL}/tickets`,
        data: formData,
        headers: {
          authorization: await AsyncStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      });
    }
  );

  const appendToForm = (values) => {
    formData.append("address", values.address);
    formData.append("description", values.description);
    const arr = [
      values.file1 && values.file1,
      values.file2 && values.file2,
      values.file3 && values.file3,
    ];

    arr.map((item) => {
      if (item.uri) {
        const uriArr = item.uri.split(".");
        const fileType = uriArr[uriArr.length - 1];
        formData.append("files[]", {
          uri:
            Platform.OS === "ios" ? item.uri.replace("file://", "") : item.uri,
          type: `image/${fileType}`,
          name: `profilepicture${item.uri}`,
        });
      }
    });
    // if (values.file1) {
    //   const uriArr = values.file1.uri.split(".");
    //   const fileType = uriArr[uriArr.length - 1];
    //   formData.append("files[]", {
    //     uri:
    //       Platform.OS === "ios"
    //         ? values.file1.uri.replace("file://", "")
    //         : values.file1.uri,
    //     type: `image/${fileType}`,
    //     name: `profilepicture${values.file1.uri}`,
    //   });
    // }
    // if (values.file2) {
    //   const uriArr = values.file2.uri.split(".");
    //   const fileType = uriArr[uriArr.length - 1];
    //   formData.append("files[]", {
    //     uri:
    //       Platform.OS === "ios"
    //         ? values.file2.uri.replace("file://", "")
    //         : values.file2.uri,
    //     type: `image/${fileType}`,
    //     name: `profilepicture${values.file2.uri}`,
    //   });
    // }
    // if (values.file3) {
    //   const uriArr = values.file3.uri.split(".");
    //   const fileType = uriArr[uriArr.length - 1];
    //   formData.append("files[]", {
    //     uri:
    //       Platform.OS === "ios"
    //         ? values.file3.uri.replace("file://", "")
    //         : values.file3.uri,
    //     type: `image/${fileType}`,
    //     name: `profilepicture${values.file3.uri}`,
    //   });
    // }
  };

  return (
    <View>
      <Text style={createticketStyle.title}>KREIRAJ PRIJAVU</Text>
      <Formik
        validationSchema={CreationTicketSchema}
        initialValues={{
          address: "",
          description: "",
          file1: "",
          file2: "",
          file3: "",
        }}
        onSubmit={(values) => {
          appendToForm(values);
          mutate(values);
        }}
      >
        {(props) => (
          <View style={createticketStyle.form}>
            <DarkLineInput
              onChangeText={props.handleChange("address")}
              value={props.values.address}
              label="ADRESA"
              error={props.errors.address}
              onBlur={props.handleBlur("address")}
              touched={props.touched.address}
            />
            <DarkLineInput
              onChangeText={props.handleChange("description")}
              value={props.values.description}
              label="OPIS"
              error={props.errors.description}
              onBlur={props.handleBlur("description")}
              multiline={true}
              touched={props.touched.description}
              numberOfLines={10}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={createticketStyle.addPhotoWrapperLarge}
              onPress={async () => {
                const res = await pickImage();
                props.setFieldValue("file1", res);
              }}
            >
              {props.values.file1 ? (
                <Image
                  resizeMode="contain"
                  source={{ uri: props.values.file1.uri }}
                  style={createticketStyle.imageLarge}
                />
              ) : (
                <Ionicons
                  color={Colors.darkGrey}
                  name={"camera-outline"}
                  size={57}
                />
              )}
            </TouchableOpacity>

            <View style={globalStyle.rowSpaceBtw}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={createticketStyle.addPhotoWrapper}
                onPress={async () => {
                  const res = await pickImage();
                  props.setFieldValue("file2", res);
                }}
              >
                {props.values.file2 ? (
                  <Image
                    resizeMode="contain"
                    source={{ uri: props.values.file2.uri }}
                    style={createticketStyle.imageLarge}
                  />
                ) : (
                  <Ionicons
                    color={Colors.darkGrey}
                    name={"camera-outline"}
                    size={57}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                style={createticketStyle.addPhotoWrapper}
                onPress={async () => {
                  const res = await pickImage();
                  props.setFieldValue("file3", res);
                }}
              >
                {props.values.file3 ? (
                  <Image
                    resizeMode="contain"
                    source={{ uri: props.values.file3.uri }}
                    style={createticketStyle.imageLarge}
                  />
                ) : (
                  <Ionicons
                    color={Colors.darkGrey}
                    name={"camera-outline"}
                    size={57}
                  />
                )}
              </TouchableOpacity>
            </View>

            {isLoading && <ActivityIndicator size="large" />}
            {isError ? (
              <Text style={createticketStyle.error}>
                {error?.response?.data?.message}
              </Text>
            ) : null}
            {isSuccess ? (
              <Text style={createticketStyle.text}>{data?.data?.message}</Text>
            ) : null}
            <TouchableOpacity
              onPress={props.handleSubmit}
              style={createticketStyle.btn}
            >
              <Text style={createticketStyle.btnText}>POŠALJI PRIJAVU</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default NewTicket;
