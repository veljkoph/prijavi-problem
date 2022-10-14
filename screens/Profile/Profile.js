import React, { useEffect } from "react";
//components
import DarkLineInput from "../../components/Global/DarkLineinput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
//style
import { profileStyle } from "../../styles/profile/profileStyle";
//api
import { useMutation, useQueryClient } from "react-query";
import axiosPost from "../../services/axiosPost";
import { ProfileEditValidationSchema } from "../../constants/validations/ProfileEditValidationSchema";
//context
import useAuth from "../../hooks/useAuth";
import ChangeImage from "../../components/Settings/ChangeImage";
import GreyInput from "../../components/Global/GreyInput";
import pen from "../../assets/icons/pen.png";
import { globalStyle } from "../../styles/global/globalStyle";
import { Colors } from "../../constants/Colors";

const Profile = () => {
  const { user, auth } = useAuth();

  const { isLoading, isError, mutate, data, error, isSuccess } = useMutation(
    async (values) => {
      return axiosPost({ url: "/profile-update", values: values });
    },
    {
      onSuccess: () => auth(),
    }
  );

  return (
    <View style={globalStyle.whiteBg}>
      <KeyboardAwareScrollView
        contentContainerStyle={profileStyle.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
      >
        <View style={globalStyle.headerSeparator} />
        <Text style={globalStyle.headerTitle}>MOJA PODEŠAVANJA</Text>

        <View style={profileStyle.formWrapper}>
          <ChangeImage />
          <Image
            source={require("../../assets/icons/settings.png")}
            style={profileStyle.iconCorner}
          />
          <Formik
            enableReinitialize={true}
            validationSchema={ProfileEditValidationSchema}
            initialValues={{
              name: user?.name,
              address: user?.address,
            }}
            onSubmit={(values) => {
              mutate(values);
            }}
          >
            {(props) => (
              <View style={profileStyle.form}>
                <GreyInput
                  onChangeText={props.handleChange("name")}
                  value={props.values.name}
                  label="Korisničko ime"
                  error={props.errors.name}
                  onBlur={props.handleBlur("name")}
                  touched={props.touched.name}
                  icon={pen}
                />
                <GreyInput
                  onChangeText={props.handleChange("address")}
                  value={props.values.address}
                  label="Adresa"
                  error={props.errors.address}
                  onBlur={props.handleBlur("address")}
                  touched={props.touched.address}
                  icon={false}
                />
                <View style={globalStyle.rowSpaceAround}>
                  <TouchableOpacity
                    onPress={() => (
                      props.setFieldValue("address", user?.address),
                      props.setFieldValue("name", user?.name)
                    )}
                    style={globalStyle.cancelBtn}
                  >
                    <Text style={globalStyle.cancelBtnText}> Odustani</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={props.handleSubmit}
                    style={globalStyle.ctaBtn}
                  >
                    <Text style={globalStyle.ctaBtnText}> Sačuvaj</Text>
                  </TouchableOpacity>
                </View>
                {isLoading && (
                  <ActivityIndicator size="large" color={Colors.darkBlue} />
                )}

                {isError ? (
                  <Text style={globalStyle.errorText}>
                    {error?.response?.data?.message}
                  </Text>
                ) : null}
                {isSuccess ? (
                  <Text style={globalStyle.successText}>
                    {data?.data?.message}
                  </Text>
                ) : null}
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Profile;
