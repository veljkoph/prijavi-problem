import React from "react";
import BottomNavigator from "./BottomNavigator/BottomNavigator";
import { NavigationContainer } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import AuthStack from "./Stacks/AuthStack";

const Navigation = () => {
  const { user } = useAuth();

  if (user)
    return (
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    );
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Navigation;
