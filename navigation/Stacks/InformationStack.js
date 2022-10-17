import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../../components/Global/Header";
import Informations from "../../components/Home/Informations";
import Home from "../../screens/Home/Home";
import Information from "../../screens/Home/Information";

const Stack = createNativeStackNavigator();

const InformationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Informations"
      screenOptions={
        {
          // headerShown: false,
        }
      }
    >
      <Stack.Screen
        name="Informations"
        component={Informations}
        options={{
          headerBackVisible: true,
          title: "Informacije",

          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="Information"
        component={Information}
        options={{
          headerBackVisible: true,
          title: "Informacija",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default InformationStack;
