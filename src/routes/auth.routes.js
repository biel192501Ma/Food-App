import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/SignIn";
import Tuor from "../screens/Tuor";

const Authentication = createStackNavigator();

const AuthenticationRoutes = () => (
  <>
    <Authentication.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Authentication.Screen name="Tuor" component={Tuor} />
      <Authentication.Screen name="SignIn" component={SignIn} />
    </Authentication.Navigator>
  </>
);

export default AuthenticationRoutes;
