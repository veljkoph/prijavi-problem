import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import Header from "../../components/Global/Header";
import EditTicket from "../../screens/Tickets/EditTicket";
import TicketConversation from "../../screens/Tickets/TicketConversation";
import Tickets from "../../screens/Tickets/Tickets";

const Stack = createNativeStackNavigator();

const TicketStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="MyTickets"
        component={Tickets}
        options={{
          headerBackVisible: false,
          title: "Moje prijave",
          header: () => <Header />,
        }}
      />
      <Stack.Screen name="EditTicket" component={EditTicket} />
      <Stack.Screen
        name="Conversations"
        component={TicketConversation}
        options={{
          headerBackVisible: false,
          title: "Moje prijave",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default TicketStack;
