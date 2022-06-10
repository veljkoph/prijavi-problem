import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@env";

export default axiosFetch = async (confObj) => {
  const { url, values } = confObj;
  axios.get(BASE_URL + url, {
    headers: {
      "Content-Type": "application/json",
      authorization: await AsyncStorage.getItem("token"),
    },
  });
};
