import React from "react";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import "react-native-gesture-handler";
import AppStack from "./src/routes/AppStack";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

function App() {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <AppStack />
      <StatusBar style="light" />
    </>
  );
}

export default App;
