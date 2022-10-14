import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";
import Notifications from "../../screens/Notifications/Notifications";
import DrawerNavigator from "../DrawerNavigator/DrawerNavigator";

const RootStack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={({ navigation }) => ({
        tabBarStyle: {
          backgroundColor: Colors.white,
        },
        headerShown: false,
        // headerTitle: "",
        // headerShadowVisible: false,
        // headerLeft: () => (
        //   <Image
        //     source={require("../../assets/images/prijavi.png")}
        //     style={{ marginLeft: 20 }}
        //   />
        // ),
        // headerRight: () => (
        //   <View style={{ flexDirection: "row", alignItems: "center" }}>
        //     <HeaderMessageBadge />
        //     <TouchableOpacity
        //       onPress={() => navigation.openDrawer()}
        //       style={{ marginRight: 20 }}
        //     >
        //       <Ionicons color={Colors.green} name="reorder-three" size={38} />
        //     </TouchableOpacity>
        //   </View>
        // ),
        // drawerPosition: "right",
        // drawerActiveTintColor: Colors.white,
        // drawerActiveBackgroundColor: Colors.darkBlue,
        // drawerInactiveTintColor: Colors.darkBlue,
        // drawerStyle: {
        //   backgroundColor: Colors.white,
        //   justifyContent: "center",
        //   flex: 1,
        //   width: "85%",
        // },
        // drawerItemStyle: {
        //   paddingVertical: 4,
        //   flex: 1,
        // },
      })}
    >
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
