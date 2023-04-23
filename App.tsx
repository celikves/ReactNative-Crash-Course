import React from "react";
import {View,Text,SafeAreaView} from 'react-native'

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Current Weather</Text>
      </View>
    </SafeAreaView>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
