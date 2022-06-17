import axios from "react-native-axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@env";

export default axiosPost = async (confObj) => {
  const { url, pageParams, values } = confObj;
  return axios.post(BASE_URL + url, values, {
    headers: {
      "Content-Type": "application/json",
      authorization: await AsyncStorage.getItem("token"),
    },
  });
};
