import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL } from "@env";

const fetchFunction = async (url) => {
  const data = await axios.get(`${BASE_URL}/${url}`, {
    headers: {
      "Content-Type": "application/json",
      authorization: await AsyncStorage.getItem("token"),
    },
  });

  return data;
};

export const useThumbnailFetch = (url) => {
  return useQuery([`thumbnail/${url}`], () => fetchFunction(url), {
    enabled: !!url,
  });
};
