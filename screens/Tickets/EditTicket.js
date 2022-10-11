import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useMutation, useQueries, useQuery } from "react-query";
//components
import DarkLineInput from "../../components/Global/DarkLineinput";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Formik } from "formik";
import pickImage from "../../functions/pickImage";
//style
import { createticketStyle } from "../../styles/createTicket/createticketStyle";
import { Colors } from "../../constants/Colors";
import { globalStyle } from "../../styles/global/globalStyle";
import { BASE_URL } from "@env";
import axios from "react-native-axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CreationTicketSchema } from "../../constants/validations/CreationTicketSchema";
import axiosFetch from "../../services/axiosFetch";

const EditTicket = ({ route }) => {
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

  //   const {
  //     data: image,
  //     error: imageError,
  //     isLoading: imageIsLoading,
  //   } = useQuery(
  //     ["image", ticket],
  //     () => axiosFetch({ url: `/${ticket.thumbnail?.path}` }),
  //     {
  //       enabled: !!ticket,
  //     }
  //   );

  let ticketID = route?.params?.params?.item;
  const {
    data: ticket,
    error: ticketError,
    isLoading: ticketIsLoading,
  } = useQuery(
    ["ticket", ticketID],
    () => axiosFetch({ url: `/tickets/${ticketID}` }),
    {
      enabled: !!ticketID,
    },
    {}
  );

  const appendToForm = (values) => {};

  return (
    <ScrollView style={createticketStyle.container}>
      <Text style={createticketStyle.title}>IZMENI PRIJAVU</Text>
      <Formik
        validationSchema={CreationTicketSchema}
        enableReinitialize={true}
        initialValues={{
          address: ticket?.data?.data?.address || "",
          description: ticket?.data?.data?.description || "",
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
    </ScrollView>
  );
};

export default EditTicket;
