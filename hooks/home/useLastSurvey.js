import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchFunction = async (id) => {
  const data = await axios.get(`${BASE_URL}/get-last-survey`, {
    headers: {
      "Content-Type": "application/json",
      authorization: await AsyncStorage.getItem("token"),
    },
  });

  return data?.data?.data;
};

const useLastSurvey = (id) => {
  return useQuery([`last-survey`], () => fetchFunction());
};

export default useLastSurvey;
