import React from 'react';
import {View, StyleSheet} from 'react-native';
import CurrentWeather from './src/components/screens/currentWeather';
import UpcomingWeather from './src/components/screens/upcomingWeather';

const App = () => {
  return (
    <View style={styles.container}>
      <UpcomingWeather />
      {/* <OurChild message={ 'How are your today'}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
