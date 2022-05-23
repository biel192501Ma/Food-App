import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";

const Stack = createStackNavigator();
const options = {
  gestureEnabled: true,
  transitionSpec: {
    open: { animation: "timing", config: { duration: 300 } },
    close: { animation: "timing", config: { duration: 300 } },
  },
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const AppRoutes = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
    }}
  >
    <Stack.Screen name="Home" component={Home} options={options} navigation={navigation}/>
  </Stack.Navigator>
);

export default AppRoutes;
