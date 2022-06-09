import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
//screens
import Profile from "../../screens/Profile/Profile";
//stacks
import HomeStack from "../Stacks/HomeStack";
import { Colors } from "../../constants/Colors";
import CreateTicket from "../../screens/CreateTicket/CreateTicket";
import TicketStack from "../Stacks/TicketStack";
import Survey from "../../screens/Survey/Survey";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: Colors.white,
        },
        tabBarActiveTintColor: Colors.greenDarkest,
        tabBarInactiveTintColor: Colors.greenDarkest,
        tabBarShowLabel: false,
        drawerItemStyle: {
          paddingVertical: 3,
        },
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({ navigation }) => ({
          title: "Novosti",
          tabBarIcon: ({ color, focused, size }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("HomeStack")}
              style={{
                borderTopWidth: focused ? 2 : 0,
                borderColor: Colors.greenDarkest,
                height: "100%",
                paddingTop: 10,
                width: "90%",
                alignItems: "center",
              }}
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
              style={{
                borderTopWidth: focused ? 2 : 0,
                borderColor: Colors.greenDarkest,
                height: "100%",
                paddingTop: 10,
                width: "90%",
                alignItems: "center",
              }}
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
                elevation: 3,
                shadowColor: Colors.greenDark,
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.3,
                shadowRadius: 2,
              }}
            >
              <Image
                source={require("../../assets/icons/plus.png")}
                style={{ height: 40, width: 40 }}
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
              style={{
                borderTopWidth: focused ? 2 : 0,
                borderColor: Colors.greenDarkest,
                height: "100%",
                paddingTop: 10,
                width: "90%",
                alignItems: "center",
              }}
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
        name="ProfileStack"
        component={Profile}
        options={({ navigation }) => ({
          //  tabBarBadge: 3,
          title: "Profil",
          tabBarBadgeStyle: { backgroundColor: "yellow" },
          tabBarIcon: ({ color, focused, size }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileStack")}
              style={{
                borderTopWidth: focused ? 2 : 0,
                borderColor: Colors.greenDarkest,
                height: "100%",
                paddingTop: 10,
                width: "90%",
                alignItems: "center",
              }}
            >
              <Ionicons
                name={focused ? "person-circle" : "person-circle-outline"}
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
