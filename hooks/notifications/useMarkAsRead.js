import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@env";
import useAuth from "../useAuth";

const postFunction = async (values) => {
  const data = axios.post(`${BASE_URL}/notifications/mark-as-read`, values, {
    headers: {
      "Content-Type": "application/json",
      authorization: await AsyncStorage.getItem("token"),
    },
  });
  return data;
};
const useMarkAsRead = () => {
  const queryClient = useQueryClient();
  const { auth } = useAuth();
  return useMutation(
    async (values) => {
      return postFunction(values);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`notifications`]), auth();
      },
    }
  );
};

export default useMarkAsRead;
