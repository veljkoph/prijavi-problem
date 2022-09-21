import React from "react";

//stacks
import HomeStack from "../Stacks/HomeStack";
import { Colors } from "../../constants/Colors";
import CreateTicket from "../../screens/CreateTicket/CreateTicket";
import TicketStack from "../Stacks/TicketStack";
import SettingsStack from "../Stacks/SettingsStack";
import SurveyStack from "../Stacks/SurveyStack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import InformationStack from "../Stacks/InformationStack";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        tabBarStyle: {
          backgroundColor: Colors.white,
        },
        headerTitle: "",
        headerLeft: () => (
          <Image
            source={require("../../assets/images/prijavi.png")}
            style={{ marginLeft: 20 }}
          />
        ),
        headerRight: () => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            >
              <Ionicons color={Colors.green2} name="mail" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            >
              <Ionicons color={Colors.green2} name="reorder-three" size={38} />
            </TouchableOpacity>
          </View>
        ),
        drawerPosition: "right",
        drawerActiveTintColor: Colors.white,
        drawerActiveBackgroundColor: Colors.green,
        drawerInactiveTintColor: Colors.darkBlue,
        drawerStyle: {
          backgroundColor: Colors.white,
          justifyContent: "flex-end",
          flex: 1,
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
            <Ionicons color={color} name="home" size={30} />
          ),
          drawerLabel: "Početni ekran",
          drawerLabelStyle: {
            fontSize: 17,
            fontFamily: "Lato-Regular",
          },
        }}
      />
      <Drawer.Screen
        name="InformationsStack"
        component={InformationStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons color={color} name="information-circle" size={31} />
          ),
          drawerLabel: "Informacije",
          drawerLabelStyle: {
            fontSize: 17,
            fontFamily: "Lato-Regular",
          },
        }}
      />
      <Drawer.Screen
        name="Survey"
        component={SurveyStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons color={color} name="checkmark-circle" size={30} />
          ),
          drawerLabel: "Moja glasanja",
          drawerLabelStyle: {
            fontSize: 17,
            fontFamily: "Lato-Regular",
          },
        }}
      />
      <Drawer.Screen
        name="CreateTicket"
        component={CreateTicket}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons color={color} name="add-circle" size={30} />
          ),
          drawerLabel: "Kreiraj prijavu",
          drawerLabelStyle: {
            fontSize: 17,
            fontFamily: "Lato-Regular",
          },
        }}
      />
      <Drawer.Screen
        name="Tickets"
        component={TicketStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons color={color} name="reader" size={30} />
          ),
          drawerLabel: "Moje prijave",
          drawerLabelStyle: {
            fontSize: 17,
            fontFamily: "Lato-Regular",
          },
        }}
      />

      <Drawer.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons color={color} name="cog" size={30} />
          ),
          drawerLabel: "Podešavanja",
          drawerLabelStyle: {
            fontSize: 17,
            fontFamily: "Lato-Regular",
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
