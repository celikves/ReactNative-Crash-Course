/* eslint-disable prettier/prettier */
import React from 'react';
import CurrentWeather from './src/components/screens/CurrentWeather';
import UpcomingWeather from './src/components/screens/UpcomingWeather';
import City from './src/components/screens/City';
import LoginScreen from './src/components/screens/LoginScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Current'} component={CurrentWeather} />
        <Tab.Screen name={'Upcoming'} component={UpcomingWeather} />
        <Tab.Screen name={'City'} component={City} />
        {/* <OurChild message={ 'How are your today'}/> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};



export default App;
