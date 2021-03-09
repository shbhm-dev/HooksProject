/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Home from './src/screens/HomeScreen';
import UseCallback from './src/screens/UseCallbackScreen';
import UseMemoScreen from './src/screens/UseMemoScreen';
import UseEffectCase1Screen from './src/screens/UseEffectCase1Screen';
import UseEffectCase2Screen from './src/screens/UseEffectCase2Screen';
import UseEffectCase3Screen from './src/screens/UseEffectCase3Screen';
import CustomHookScreen from './src/screens/CustomHookScreen';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

const HooksNavigatorStack = createStackNavigator();
const App = () => {
  return (
    <HooksNavigatorStack.Navigator>
      <HooksNavigatorStack.Screen name="HomeScreen" component={Home} />
      <HooksNavigatorStack.Screen
        name="UseCallbackScreen"
        component={UseCallback}
      />
      <HooksNavigatorStack.Screen
        name="UseMemoScreen"
        component={UseMemoScreen}
      />
      <HooksNavigatorStack.Screen
        name="CustomHookScreen"
        component={CustomHookScreen}
      />
      <HooksNavigatorStack.Screen
        name="UseEffectCase1Screen"
        component={UseEffectCase1Screen}
      />
      <HooksNavigatorStack.Screen
        name="UseEffectCase2Screen"
        component={UseEffectCase2Screen}
      />
      <HooksNavigatorStack.Screen
        name="UseEffectCase3Screen"
        component={UseEffectCase3Screen}
      />
    </HooksNavigatorStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
