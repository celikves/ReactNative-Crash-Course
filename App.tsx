import React from "react";
import {View,Text,SafeAreaView,StyleSheet} from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Current Weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <Text>High:8</Text>
        <Text>Low:5</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems:'center'
  },
  wrapper: {
    flex:1
  },
  temp: {
    color:'black',
    fontSize:48
  },
  feels: {
    fontSize: 30,
    color:'black'
  }
})

export default App



