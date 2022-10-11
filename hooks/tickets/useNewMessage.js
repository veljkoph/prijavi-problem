import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@env";

const postFunction = async (values, ticketID) => {
  const data = axios.post(`${BASE_URL}/tickets/${ticketID}/activity`, values, {
    headers: {
      "Content-Type": "application/json",
      authorization: await AsyncStorage.getItem("token"),
    },
  });
  return data;
};
const useNewMessage = ({ ticketID, setMessage }) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (values) => {
      return postFunction(values, ticketID);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`tickets/${ticketID}`]);
        setMessage("");
      },
    }
  );
};

export default useNewMessage;
