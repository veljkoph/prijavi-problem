import React from "react";
import DrawerNavigator from "./DrawerNavigator/DrawerNavigator";
import useAuth from "../hooks/useAuth";
import AuthStack from "./Stacks/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./DrawerNavigator/RootStackScreen";

const Navigation = () => {
  const { user } = useAuth();

  if (user)
    return (
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    );
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Navigation;
