import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import ExploreScreen from './Screens/ExploreScreen';
import ProfileScreen from './Screens/ProfileScreen';
import Root from './Navigation/Root';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="Root" component={Root} /> */}
        <Tab.Screen name="LoginScreen" component={LoginScreen} />
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="ExplreScreen" component={ExploreScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
