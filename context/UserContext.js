import React, { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "@env";
import { useQuery } from "react-query";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  //USER HANDLE
  const [user, setUser] = useState();
  const auth = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/auth`, {
        headers: {
          "Content-Type": "application/json",
          authorization: await AsyncStorage.getItem("token"),
        },
      });
      setUser(response.data.data);
    } catch (error) {
      setUser(false);
    }
  };
  useEffect(() => {
    auth();
  }, []);

  const logout = async (value) => {
    try {
      const data = await axios.post(`${BASE_URL}/logout`, value, {
        headers: {
          authorization: await AsyncStorage.getItem("token"),
        },
      });

      AsyncStorage.removeItem("token");
      setUser(false);
      auth()
        .then(() => {})
        .catch(() => {
          AsyncStorage.removeItem("token");
        });
    } catch (error) {
      AsyncStorage.removeItem("token");
      setUser(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        auth,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
