import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Screen/HomeScreen";
import MainScreen from "./Screen/MainScreen";
import store from "./Screen/store";
import { Provider } from "react-redux";
import UserPage from "./Screen/pages/User";
import User from "./Screen/pages/User";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home Screen">
          <Stack.Screen name="Home Screen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main Screen" component={MainScreen} options={{ headerShown: false }} />
          <Stack.Screen name="User" component={User} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
