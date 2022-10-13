import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Text, Touchable, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";
import Notifications from "../../screens/Notifications/Notifications";
import DrawerNavigator from "../DrawerNavigator/DrawerNavigator";
import Navigation from "../Navigation";

const RootStack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        screenOptions={{ presentation: "modal" }}
        name="DrawerNavigator"
        component={DrawerNavigator}
      />
      <RootStack.Screen
        name="Notifications"
        component={Notifications}
        options={({ navigation, route }) => ({
          presentation: "modal",
          headerShown: true,
          title: "Obaveštenja",
          headerStyle: {
            backgroundColor: Colors.green,
          },
          headerTitleStyle: {
            color: "#FFF",
            fontFamily: "Roboto-Medium",
            fontSize: 18,
          },

          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Image
                source={require("../../assets/icons/close.png")}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </RootStack.Navigator>
  );
};
export default RootStackScreen;
