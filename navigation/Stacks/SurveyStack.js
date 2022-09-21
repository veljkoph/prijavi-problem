import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Survey from "../../screens/Survey/Survey";

import Surveys from "../../screens/Survey/Surveys";
import Tickets from "../../screens/Tickets/Tickets";

const Stack = createNativeStackNavigator();

const SurveyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SurveysHome"
        component={Surveys}
        options={{
          headerBackVisible: true,
          title: "Ankete",
        }}
      />
      <Stack.Screen
        name="SurveyDetails"
        component={Survey}
        options={{
          headerBackVisible: true,
          title: "Ankete",
        }}
      />
    </Stack.Navigator>
  );
};
export default SurveyStack;
