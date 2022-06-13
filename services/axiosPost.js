import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@env";

export default axiosPost = async (confObj) => {
  const { url, pageParams, values } = confObj;
  axios.post(BASE_URL + url, values, {
    headers: {
      "Content-Type": "application/json",
      authorization: await AsyncStorage.getItem("token"),
    },
  });
};