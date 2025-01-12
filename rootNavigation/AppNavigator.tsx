import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './BottomNavigator';
import React from 'react';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BottomBar">
          <Stack.Screen
          name="BottomBar"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigator;