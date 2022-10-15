const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./screens/Splash";
import Diversity from "./screens/Diversity";
import Customize from "./screens/Customize";
import Verify from "./screens/Verify";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dreambig from "./screens/Dreambig";
import GroupScreen from "./screens/GroupScreen";
import Purchase from "./screens/Purchase";
import Product from "./screens/Product";
import List from "./screens/List";
import Space from "./screens/Space";
import Budget from "./screens/Budget";
import Home from "./screens/Home";
import Header5 from "./components/Header5";
import Header4 from "./components/Header4";
import Header3 from "./components/Header3";
import Header2 from "./components/Header2";
import Header1 from "./components/Header1";
import Header from "./components/Header";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const SplashScreen = () => <View />;

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Diversity"
              component={Diversity}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Customize"
              component={Customize}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Verify"
              component={Verify}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dreambig"
              component={Dreambig}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group4"
              component={GroupScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Purchase"
              component={Purchase}
              options={(props) => ({
                headerShown: true,
                header: () => <Header5 />,
              })}
            />
            <Stack.Screen
              name="Product"
              component={Product}
              options={(props) => ({
                headerShown: true,
                header: () => <Header4 />,
              })}
            />
            <Stack.Screen
              name="List"
              component={List}
              options={(props) => ({
                headerShown: true,
                header: () => <Header3 />,
              })}
            />
            <Stack.Screen
              name="Space"
              component={Space}
              options={(props) => ({
                headerShown: true,
                header: () => <Header2 />,
              })}
            />
            <Stack.Screen
              name="Budget"
              component={Budget}
              options={(props) => ({
                headerShown: true,
                header: () => <Header1 />,
              })}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={(props) => ({
                headerShown: true,
                header: () => <Header />,
              })}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
