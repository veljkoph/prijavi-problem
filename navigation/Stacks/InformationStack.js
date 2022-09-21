import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Informations from "../../components/Home/Informations";
import Home from "../../screens/Home/Home";
import Information from "../../screens/Home/Information";

const Stack = createNativeStackNavigator();

const InformationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Informations"
        component={Informations}
        options={{
          headerBackVisible: true,
          title: "Informacije",
          headerBackButtonMenuEnabled: true,
        }}
      />
      <Stack.Screen
        name="Information"
        component={Information}
        options={{
          headerBackVisible: true,
          title: "Informacija",
        }}
      />
    </Stack.Navigator>
  );
};
export default InformationStack;
