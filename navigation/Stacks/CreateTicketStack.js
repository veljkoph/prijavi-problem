import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../../components/Global/Header";
import CreateTicket from "../../screens/CreateTicket/CreateTicket";
import CreationSuccessful from "../../screens/CreateTicket/CreationSuccessful";

const Stack = createNativeStackNavigator();

const CreateTicketStack = () => {
  return (
    <Stack.Navigator initialRouteName="CreateTicketScreen">
      <Stack.Screen
        name="CreateTicketScreen"
        component={CreateTicket}
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="CreationSuccsessful"
        component={CreationSuccessful}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default CreateTicketStack;
