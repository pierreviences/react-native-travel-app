import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Root} from 'native-base';
import {Home, Packages,WebviewPackage,WebviewAbout, About, LoadingScreen} from '../screens';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {app_color} from '../services/main/MainService' 
  
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#F89B3E',
        
      }}
          screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName
          if (route.name == 'Home') {
            iconName = 'home'
          } else if (route.name == 'About') {
            iconName = 'question'
          } else if (route.name == 'Packages') {
            iconName = 'archive'
          }
          return  <FontAwesome   name={iconName} color={color} size={size} />
        } 
      })}
     >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Packages' component={Packages} />
      <Tab.Screen name='About' component={About} />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen"   screenOptions={{
    headerShown: false
  }}>
         <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
          <Stack.Screen name="WebviewPackage" component={WebviewPackage} />
           <Stack.Screen name="WebviewAbout" component={WebviewAbout} />
          <Stack.Screen
          name='Home'
          component={MainTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





export default App;