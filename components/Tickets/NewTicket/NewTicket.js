import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useMutation } from "react-query";
import DarkLineInput from "../../Global/DarkLineinput";
import { Formik } from "formik";
import { createticketStyle } from "../../../styles/createTicket/createticketStyle";
import placeholder from "../../../assets/images/photoPlaceholder.jpeg";
import { darkLineInputStyle } from "../../../styles/global/darkLineInputStyle";
import pickImage from "../../../functions/pickImage";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@env";
const NewTicket = () => {
  const [image, setImage] = useState(false);
  const [imageSmall, setImageSmall] = useState(false);
  const [imageSmall2, setImageSmall2] = useState(false);

  //Bearer 20|8LzDaRoMv3gKWI96wWvgM8aDLm7koyRUtx9Xdbz6

  const { isLoading, isError, mutate, data, error, isSuccess } = useMutation(
    async (values) => {
      axiosPost({ url: "/tickets", values: values }).then(() => "");
    }
  );

  const imageHandler = async (imageset) => {
    const img = await pickImage();
    imageset(img);
  };
  console.log(error);
  return (
    <View>
      <Text style={createticketStyle.title}>KREIRAJ PRIJAVU</Text>
      <Formik
        // validationSchema={LoginSchema}
        initialValues={{ address: "", description: "" }}
        onSubmit={(values) => {
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
            <Text style={createticketStyle.label}>DODAJ FOTOGRAFIJE</Text>

            <TouchableOpacity onPress={() => imageHandler(setImage)}>
              <Image
                resizeMode="contain"
                source={image ? { uri: image?.uri } : placeholder}
                style={createticketStyle.imgLarge}
              />
            </TouchableOpacity>
            <View style={createticketStyle.smallImgsWrapper}>
              <TouchableOpacity
                onPress={() => imageHandler(setImageSmall)}
                style={createticketStyle.imgSmallWrapper}
              >
                <Image
                  resizeMode="contain"
                  source={imageSmall ? { uri: imageSmall?.uri } : placeholder}
                  style={createticketStyle.imgSmall}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => imageHandler(setImageSmall2)}
                style={createticketStyle.imgSmallWrapper}
              >
                <Image
                  resizeMode="contain"
                  source={imageSmall2 ? { uri: imageSmall2?.uri } : placeholder}
                  style={createticketStyle.imgSmall}
                />
              </TouchableOpacity>
            </View>
            {isLoading && <ActivityIndicator size="large" />}

            {isError ? (
              <Text style={createticketStyle.text}>
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
