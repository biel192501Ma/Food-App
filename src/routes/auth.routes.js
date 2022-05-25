import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/SignIn";
import Tuor from "../screens/Tuor";
import Home from '../screens/Home'
import ModalSingin from "../Components/Modals/ModalSingin";
import ModalSingup from "../Components/Modals/ModalSingup";

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
      <Authentication.Screen name="Home" component={Home} />

      

    </Authentication.Navigator>
  </>
);

export default AuthenticationRoutes;
