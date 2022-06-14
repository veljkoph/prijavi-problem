import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
//stacks
import HomeStack from "../Stacks/HomeStack";
import { Colors } from "../../constants/Colors";
import CreateTicket from "../../screens/CreateTicket/CreateTicket";
import TicketStack from "../Stacks/TicketStack";
import Survey from "../../screens/Survey/Survey";
import SettingsStack from "../Stacks/SettingsStack";
import { globalStyle } from "../../styles/global/globalStyle";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: Colors.white,
        },
        tabBarActiveTintColor: Colors.green2,
        tabBarInactiveTintColor: Colors.green2,
        tabBarShowLabel: false,
        headerShown: false,
        drawerItemStyle: {
          paddingVertical: 3,
        },
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, focused, size }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("HomeStack")}
              style={
                focused
                  ? [globalStyle.borderFocusedMenu, globalStyle.paddingFocused]
                  : globalStyle.paddingNotFocused
              }
            >
              <Ionicons
                color={color}
                name={focused ? "home" : "home-outline"}
                size={27}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="Survey"
        component={Survey}
        options={({ navigation }) => ({
          title: "Ankete",
          tabBarIcon: ({ focused, color, size }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Survey")}
              style={
                focused
                  ? [globalStyle.borderFocusedMenu, globalStyle.paddingFocused]
                  : globalStyle.paddingNotFocused
              }
            >
              <Ionicons
                color={color}
                name={focused ? "podium" : "podium-outline"}
                size={27}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="CreateTicket"
        component={CreateTicket}
        options={({ navigation }) => ({
          title: "Prijavi problem",

          tabBarIcon: ({ focused, color, size }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CreateTicket")}
              style={{
                position: "absolute",
                top: -28,
                backgroundColor: focused ? "#f0ead2" : Colors.white,
                width: 60,
                height: 60,
                borderRadius: 60,
                alignItems: "center",
                justifyContent: "center",
                elevation: 2,
                shadowColor: Colors.greenDark,
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
              }}
            >
              <Image
                source={require("../../assets/icons/plus.png")}
                style={{ height: 34, width: 34 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="Tickets"
        component={TicketStack}
        options={({ navigation }) => ({
          title: "Tiketi",

          tabBarIcon: ({ focused, color, size }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Tickets")}
              style={
                focused
                  ? [globalStyle.borderFocusedMenu, globalStyle.paddingFocused]
                  : globalStyle.paddingNotFocused
              }
            >
              <Ionicons
                color={color}
                name={focused ? "leaf" : "leaf-outline"}
                size={27}
              />
            </TouchableOpacity>
          ),
        })}
      />

      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={({ navigation }) => ({
          //  tabBarBadge: 3,
          title: "Podešavanja",
          tabBarBadgeStyle: { backgroundColor: "yellow" },
          tabBarIcon: ({ color, focused, size }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("SettingsStack")}
              style={
                focused
                  ? [globalStyle.borderFocusedMenu, globalStyle.paddingFocused]
                  : globalStyle.paddingNotFocused
              }
            >
              <Ionicons
                name={focused ? "cog" : "cog-outline"}
                size={27}
                color={color}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
