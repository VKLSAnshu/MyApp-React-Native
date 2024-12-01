import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from '../screens/splash';
import LoginScreen from '../screens/auth/login';
import DashboardScreen from '../screens/master/dashboard';

import CustomDrawerContent from './DrawerContent';




const Drawer = createDrawerNavigator();



// Tab Navigation
const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
}

// Main Stack Navigation
const Stack = createStackNavigator();
export default function AppNavigator() {
  return (

    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="App" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>

  );
}

// Drawer Navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={TabNavigator} />
    </Drawer.Navigator>
  );
}
