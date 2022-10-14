import React, { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "@env";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("loading");
  const [isLoading, setIsLoading] = useState(false);
  const auth = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/auth`, {
        headers: {
          "Content-Type": "application/json",
          authorization: await AsyncStorage.getItem("token"),
        },
      });
      setUser(response?.data?.data);
      setIsLoading(false);
    } catch (error) {
      setUser(false);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    auth();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        auth,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
