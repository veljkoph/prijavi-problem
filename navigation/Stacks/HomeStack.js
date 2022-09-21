import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home/Home";
import Information from "../../screens/Home/Information";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
