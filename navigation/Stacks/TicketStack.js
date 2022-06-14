import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tickets from "../../screens/Tickets/Tickets";

const Stack = createNativeStackNavigator();

const TicketStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TicketStack"
        component={Tickets}
        options={{
          headerBackVisible: true,
          title: "Moje prijave",
        }}
      />
    </Stack.Navigator>
  );
};
export default TicketStack;
