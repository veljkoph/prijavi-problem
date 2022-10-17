import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import Header from "../../components/Global/Header";
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
          header: () => <Header />,
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
