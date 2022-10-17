import React from "react";

//stacks
import HomeStack from "../Stacks/HomeStack";
import { Colors } from "../../constants/Colors";
import TicketStack from "../Stacks/TicketStack";
import SurveyStack from "../Stacks/SurveyStack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import InformationStack from "../Stacks/InformationStack";
import DrawerWrapper from "./DrawerWrapper";
import CreateTicketStack from "../Stacks/CreateTicketStack";
import Profile from "../../screens/Profile/Profile";
import HeaderMessageBadge from "../../components/Notifications/HeaderMessageBadge";
import Header from "../../components/Global/Header";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerWrapper {...props} />}
      screenOptions={({ navigation }) => ({
        tabBarStyle: {
          backgroundColor: Colors.white,
        },
        headerShown: false,
        headerTitle: "",
        headerShadowVisible: false,
        drawerPosition: "right",
        drawerActiveTintColor: Colors.white,
        drawerActiveBackgroundColor: Colors.darkBlue,
        drawerInactiveTintColor: Colors.darkBlue,
        drawerStyle: {
          backgroundColor: Colors.white,
          justifyContent: "center",
          flex: 1,
          width: "85%",
        },
        drawerItemStyle: {
          paddingVertical: 4,
          flex: 1,
        },
      })}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons color={Colors.green} name="home" size={30} />
          ),
          drawerLabel: "Početni ekran",
          drawerLabelStyle: {
            fontSize: 17,
            fontFamily: "Roboto-Regular",
          },
        }}
      />
      <Drawer.Screen
        name="InformationsStack"
        component={InformationStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              color={Colors.green}
              name="information-circle"
              size={31}
            />
          ),
          drawerLabel: "Informacije",
          drawerLabelStyle: {
            fontSize: 17,
            fontFamily: "Roboto-Regular",
          },
        }}
      />
      <Drawer.Screen
        name="Survey"
        component={SurveyStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons color={Colors.green} name="checkmark-circle" size={30} />
          ),
          drawerLabel: "Moja glasanja",
          drawerLabelStyle: {
            fontSize: 17,
            fontFamily: "Roboto-Regular",
          },
        }}
      />
      <Drawer.Screen
        name="CreateTicket"
        component={CreateTicketStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons color={Colors.green} name="add-circle" size={30} />
          ),
          drawerLabel: "Kreiraj prijavu",
          drawerLabelStyle: {
            fontSize: 17,
            fontFamily: "Roboto-Regular",
          },
        }}
      />
      <Drawer.Screen
        name="Tickets"
        component={TicketStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons color={Colors.green} name="reader" size={30} />
          ),
          drawerLabel: "Moje prijave",
          drawerLabelStyle: {
            fontSize: 17,
            fontFamily: "Roboto-Regular",
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons color={Colors.green} name="person-circle" size={30} />
          ),
          drawerLabel: "Profil",
          drawerLabelStyle: {
            fontSize: 17,
            fontFamily: "Roboto-Regular",
          },
          header: () => <Header />,
          headerShown: true,
        }}
      />
      {/* <Drawer.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons color={Colors.green} name="cog" size={30} />
          ),
          drawerLabel: "Podešavanja",
          drawerLabelStyle: {
            fontSize: 17,
            fontFamily: "Roboto-Regular",
          },
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
