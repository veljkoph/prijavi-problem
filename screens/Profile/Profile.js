import React, { useEffect } from "react";
//components
import DarkLineInput from "../../components/Global/DarkLineinput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
//style
import { profileStyle } from "../../styles/profile/profileStyle";
//api
import { useMutation } from "react-query";
import axiosPost from "../../services/axiosPost";
import { ProfileEditValidationSchema } from "../../constants/validations/ProfileEditValidationSchema";
//context
import useAuth from "../../hooks/useAuth";
import ChangeImage from "../../components/Settings/ChangeImage";
//
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@env";

const Profile = () => {
  const { user, auth } = useAuth();

  const { isLoading, isError, mutate, data, error, isSuccess } = useMutation(
    async (values) => {
      return axiosPost({ url: "/profile-update", values: values });
    }
  );

  useEffect(() => {
    isSuccess && auth();
  }, [isSuccess]);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={profileStyle.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      keyboardShouldPersistTaps="handled"
    >
      <ChangeImage />
      <Formik
        enableReinitialize={true}
        validationSchema={ProfileEditValidationSchema}
        initialValues={{ name: user?.data?.name, address: user?.data?.address }}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {(props) => (
          <View style={profileStyle.form}>
            <DarkLineInput
              onChangeText={props.handleChange("name")}
              value={props.values.name}
              label="IME"
              error={props.errors.name}
              onBlur={props.handleBlur("name")}
              touched={props.touched.name}
            />
            <DarkLineInput
              onChangeText={props.handleChange("address")}
              value={props.values.address}
              label="ADRESA"
              error={props.errors.address}
              onBlur={props.handleBlur("address")}
              touched={props.touched.address}
            />

            {isLoading && <ActivityIndicator size="large" />}

            {isError ? (
              <Text style={profileStyle.text}>
                {error?.response?.data?.message}
              </Text>
            ) : null}
            {isSuccess ? (
              <Text style={profileStyle.text}>{data?.data?.message}</Text>
            ) : null}
            <TouchableOpacity
              onPress={props.handleSubmit}
              style={profileStyle.submitBtn}
            >
              <Text style={profileStyle.submitBtnText}> SAČUVAJ PROMENE</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default Profile;
