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
import DrawerWrapper from "./DrawerWrapper";
import CreateTicketStack from "../Stacks/CreateTicketStack";
import Profile from "../../screens/Profile/Profile";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerWrapper {...props} />}
      screenOptions={({ navigation }) => ({
        tabBarStyle: {
          backgroundColor: Colors.white,
        },
        headerShown: true,
        headerTitle: "",
        headerShadowVisible: false,
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
              <Ionicons color={Colors.green} name="mail" size={34} />
              <View
                style={{
                  backgroundColor: Colors.red,
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  right: -10,
                  top: 14,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#fff",
                    fontFamily: "Roboto-Medium",
                  }}
                >
                  0
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            >
              <Ionicons color={Colors.green} name="reorder-three" size={38} />
            </TouchableOpacity>
          </View>
        ),
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
