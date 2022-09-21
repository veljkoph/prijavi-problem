import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home/Home";
import Profile from "../../screens/Profile/Profile";
import Settings from "../../screens/Settings/Settings";

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerBackVisible: false,
          headerShown: false,
          title: "Podešavanja",
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerBackVisible: true,
          title: "Profil",
          headerBackButtonMenuEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
};
export default SettingsStack;
