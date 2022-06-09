import React, { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "@env";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "test" });
  const [isLoading, setIsLoading] = useState(false);

  const auth = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/auth`, {
        headers: {
          authorization: await AsyncStorage.getItem("token"),
        },
      });
      setUser(response.data);
      setIsLoading(false);
    } catch (error) {
      setUser(false);
      setIsLoading(false);
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
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
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
        isLoading,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
///
