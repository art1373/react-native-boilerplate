import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Strings from '../Values/Strings';
import ExampleScreen from 'App/Containers/Example/ExampleScreen';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';
const Stack = createStackNavigator();
export const MainStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={Strings.Routes.SPLASH_SCREEN}
        component={SplashScreen}
      />
      <Stack.Screen
        name={Strings.Routes.HOME_SCREEN}
        component={ExampleScreen}
      />
    </Stack.Navigator>
  );
};
