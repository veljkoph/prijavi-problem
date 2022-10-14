import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchFunction = async () => {
  const data = await axios.get(`${BASE_URL}/notifications`, {
    headers: {
      "Content-Type": "application/json",
      authorization: await AsyncStorage.getItem("token"),
    },
  });

  return data?.data?.notifications;
};

const useNotifications = (id) => {
  return useQuery([`notifications`], () => fetchFunction());
};

export default useNotifications;
