import React from 'react';
import {StyleSheet, View} from 'react-native';
import FirstPage from './bitirme/FirstPage';

const App = () => {
  return (
    <View style={styles.container}>
      <FirstPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
