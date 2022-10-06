import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateTicket from "../../screens/CreateTicket/CreateTicket";
import CreationSuccessful from "../../screens/CreateTicket/CreationSuccessful";
import Home from "../../screens/Home/Home";
import Information from "../../screens/Home/Information";

const Stack = createNativeStackNavigator();

const CreateTicketStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreateTicketScreen"
        component={CreateTicket}
        options={{
          headerShown: false,
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
