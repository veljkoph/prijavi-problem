import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../../components/Global/Header";
import Survey from "../../screens/Survey/Survey";

import Surveys from "../../screens/Survey/Surveys";
import Tickets from "../../screens/Tickets/Tickets";

const Stack = createNativeStackNavigator();

const SurveyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }
    >
      <Stack.Screen
        name="SurveysHome"
        component={Surveys}
        options={{
          headerBackVisible: true,
          title: "Ankete",

          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="SurveyDetails"
        component={Survey}
        options={{
          headerBackVisible: true,
          title: "Ankete",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default SurveyStack;
