import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, View, ActivityIndicator } from "react-native";

import Authentication from "./auth.routes";
import AppRoutes from "./app.routes";

const RootNavigation = () => {
  const token = null;

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {token === null ? <Authentication /> : <AppRoutes />}
    </NavigationContainer>
  );
};

const App = () => {
  return <RootNavigation />;
};

export default App;
