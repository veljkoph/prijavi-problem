import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditTicket from "../../screens/Tickets/EditTicket";
import TicketConversation from "../../screens/Tickets/TicketConversation";
import Tickets from "../../screens/Tickets/Tickets";

const Stack = createNativeStackNavigator();

const TicketStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="MyTickets"
        component={Tickets}
        options={{
          headerBackVisible: false,
          title: "Moje prijave",
          headerShown: false,
        }}
      />
      <Stack.Screen name="EditTicket" component={EditTicket} />
      <Stack.Screen name="Conversations" component={TicketConversation} />
    </Stack.Navigator>
  );
};
export default TicketStack;
