import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditTicket from "../../screens/Tickets/EditTicket";
import Tickets from "../../screens/Tickets/Tickets";

const Stack = createNativeStackNavigator();

const TicketStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyTickets"
        component={Tickets}
        options={{
          headerBackVisible: true,
          title: "Moje prijave",
        }}
      />
      <Stack.Screen
        name="EditTicket"
        component={EditTicket}
        options={{
          headerBackVisible: true,
          title: "Izmena prijave",
        }}
      />
    </Stack.Navigator>
  );
};
export default TicketStack;
