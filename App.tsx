/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import CurrentWeather from './src/components/screens/currentWeather';
import UpcomingWeather from './src/components/screens/upcomingWeather';
import City from './src/components/screens/City';
import LoginScreen from './src/components/screens/LoginScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <View style={styles.container}>
      <CurrentWeather />
      {/* <OurChild message={ 'How are your today'}/> */}
    </View>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
