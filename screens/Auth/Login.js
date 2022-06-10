import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { authStyle } from "../../styles/auth/authStyle";
import { Formik } from "formik";
import { LoginSchema } from "../../constants/validations/LoginValidationSchema";
import { BASE_URL } from "@env";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DarkLineInput from "../../components/Global/DarkLineinput";
import { useMutation } from "react-query";
import axios from "axios";
import { useRef, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuth from "../../hooks/useAuth";
import LottieView from "lottie-react-native";

const Login = ({ navigation }) => {
  const { user, auth } = useAuth();

  const { isLoading, isError, mutate, data, error, isSuccess } = useMutation(
    (values) => {
      return axios.post(`${BASE_URL}/login`, values);
    }
  );
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const setToken = async () => {
      await AsyncStorage.setItem("token", `Bearer ${data?.data?.access_token}`);
    };
    if (data?.data?.access_token) {
      setToken();
      auth();
    }
  }, [data?.data?.access_token]);

  useEffect(() => {
    user && navigation.navigate("HomeStack");
  }, [user]);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={authStyle.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      keyboardShouldPersistTaps="handled"
    >
      <LottieView
        style={{
          height: 225,
          width: 225,
          marginBottom: 20,
          alignSelf: "flex-start",
        }}
        source={require("../../assets/animations/102118-eco-friendly-city.json")}
        autoPlay={true}
        loop={false}
      />

      <Formik
        validationSchema={LoginSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          values.device_token = await AsyncStorage.getItem("push_token");
          mutate(values);
        }}
      >
        {(props) => (
          <View style={authStyle.form}>
            <DarkLineInput
              onChangeText={props.handleChange("email")}
              value={props.values.email}
              label="EMAIL"
              error={props.errors.email}
              onBlur={props.handleBlur("email")}
              touched={props.touched.email}
            />
            <DarkLineInput
              onChangeText={props.handleChange("password")}
              value={props.values.password}
              label="LOZINKA"
              password={true}
              error={props.errors.password}
              onBlur={props.handleBlur("password")}
              touched={props.touched.password}
            />
            <View style={authStyle.textWrapper}>
              <Text style={authStyle.text}>Nemaš nalog? </Text>
              <TouchableOpacity
                style={authStyle.button}
                onPress={() => navigation.navigate("Register")}
              >
                <Text style={authStyle.textBtn}> Registruj se</Text>
              </TouchableOpacity>
            </View>

            {isLoading && <ActivityIndicator size="large" />}

            {isError ? (
              <Text style={authStyle.text}>
                {error?.response?.data?.message}
              </Text>
            ) : null}
            {isSuccess ? (
              <Text style={authStyle.text}>{data?.data?.message}</Text>
            ) : null}
            <TouchableOpacity
              onPress={props.handleSubmit}
              style={authStyle.authButton}
            >
              <Text style={authStyle.authBtnText}> PRIJAVI SE</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default Login;
