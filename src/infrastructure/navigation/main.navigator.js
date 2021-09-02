import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { MainScreen } from "../../features/main/screens/main.screen";
import { ParametersScreen } from "../../features/main/screens/parameters.screen";

const Stack = createStackNavigator();

export const MainNavigator = () => (
  <Stack.Navigator headerShown={false}>
    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen name="Parameters" component={ParametersScreen} />
  </Stack.Navigator>
);
