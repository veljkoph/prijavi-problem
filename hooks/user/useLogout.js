import axios from "axios";
import { useMutation } from "react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@env";
import useAuth from "../useAuth";

const postFunction = async (values) => {
  const data = axios.post(`${BASE_URL}/logout`, values, {
    headers: {
      "Content-Type": "application/json",
      authorization: await AsyncStorage.getItem("token"),
    },
  });
  return data;
};
const useLogout = () => {
  const { setUser } = useAuth();
  return useMutation(
    async (values) => {
      return postFunction(values);
    },
    {
      onSettled: async () => {
        setUser("");
        await AsyncStorage.removeItem("token");
      },
    }
  );
};

export default useLogout;
