import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

/* Home */
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Welcome from "../pages/Welcome";

const { Navigator, Screen } = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="welcome" component={Welcome} />
        <Screen name="home" component={Home} />
        <Screen name="detail" component={Detail} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
