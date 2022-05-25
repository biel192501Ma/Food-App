import React from "react";

import Tuor from "./src/screens/Tuor";
import Routes from "./src/routes";


import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Inter_700Bold, Inter_400Regular } from "@expo-google-fonts/inter";
import { FiraSans_400Regular } from "@expo-google-fonts/fira-sans";
import Request from "./src/screens/Requeste";


export default function App() {
  const [fontsLoaded] = useFonts({
    FiraSans_400Regular,
    Inter_700Bold,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Routes />;
}
