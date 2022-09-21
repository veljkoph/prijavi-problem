import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { authStyle } from "../../styles/auth/authStyle";
import { Formik } from "formik";
import { BASE_URL } from "@env";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DarkLineInput from "../../components/Global/DarkLineinput";
import { RegisterSchema } from "../../constants/validations/RegisterValidationSchema";
import { useMutation } from "react-query";
import axios from "axios";
import LottieView from "lottie-react-native";
const Register = ({ navigation }) => {
  const { isLoading, isError, mutate, data, error, isSuccess } = useMutation(
    (values) => {
      return axios.post(`${BASE_URL}/register`, values);
    }
  );

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={authStyle.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      keyboardShouldPersistTaps="handled"
    >
      <Image
        style={authStyle.image}
        source={require("../../assets/images/onboarding.png")}
      />
      <Formik
        validationSchema={RegisterSchema}
        initialValues={{
          email: "",
          password: "",
          password_confirmation: "",
          name: "",
        }}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {(props) => (
          <View style={authStyle.form}>
            <DarkLineInput
              onChangeText={props.handleChange("name")}
              value={props.values.name}
              label="IME"
              error={props.errors.name}
              onBlur={props.handleBlur("name")}
              touched={props.touched.name}
            />
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
            <DarkLineInput
              onChangeText={props.handleChange("password_confirmation")}
              value={props.values.password_confirmation}
              label="PONOVI LOZINKU"
              password={true}
              error={props.errors.password_confirmation}
              onBlur={props.handleBlur("password_confirmation")}
              touched={props.touched.password_confirmation}
            />

            {isLoading && <ActivityIndicator size="large" />}
            {error ? (
              <Text style={authStyle.text}>
                {error?.response?.data?.message}
              </Text>
            ) : null}
            {isSuccess ? (
              <Text style={authStyle.text}>{data?.data?.message}</Text>
            ) : null}
            {isSuccess ? (
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={authStyle.authButton}
              >
                <Text style={authStyle.authBtnText}> PRIJAVI SE</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={props.handleSubmit}
                style={authStyle.authButton}
              >
                <Text style={authStyle.authBtnText}> REGISTRUJ SE</Text>
              </TouchableOpacity>
            )}
            <View style={authStyle.textWrapper}>
              <Text style={authStyle.text}>Imaš nalog? </Text>
              <TouchableOpacity
                style={authStyle.button}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={authStyle.textBtn}> PRIJAVI SE</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default Register;
