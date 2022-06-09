import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tickets from "../../screens/Tickets/Tickets";

const Stack = createNativeStackNavigator();

const TicketStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TicketStack"
        component={Tickets}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default TicketStack;
