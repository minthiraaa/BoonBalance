import React from "react";
import { Platform, View, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignupScreen from "./screens/SignupScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import ServiceScreen from "./screens/ServiceScreen";
import CategoryDetailScreen from "./screens/CategoryDetailScreen";
import PlaceDetailScreen from "./screens/PlaceDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <StatusBar barStyle="dark-content" />
    <View style={{flex: 1, backgroundColor: "#eee7f3", alignItems: "center"}}>
    <View style={{flex: 1, width: "100%", maxWidth: Platform.OS === "web" ? 440 : undefined}}>
    <NavigationContainer>
      <Stack.Navigator
  initialRouteName="Login"
  screenOptions={{
    headerShown: false,
    animation: "slide_from_right",
  }}
>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Service" component={ServiceScreen} />
        <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} />
        <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
    </View>
    </SafeAreaProvider>
  );
}
