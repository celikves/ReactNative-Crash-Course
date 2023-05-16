/* eslint-disable prettier/prettier */

import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import ListItem from '../components/ListItem';

//IonIcon.loadFont();
//core components usully come with props which can be used.

// prop is short for property. They are used to pass data from parent to child. We can use props to customize our components. MOST IMPORTANTLY IT PROMOTES COMPONENT REUSUABLİTY.

//Props are immutable so they cant be changed once the component is created.

//We use unidirectional dala flow to pass the props from parent to child.

//unidirectional data flow means data can only move in one direcition.

const data = [
  {
    dt_txt: "2022-08-30 14:00:00",
    main: {
      "temp_min": 296.34,
      "temp_max": 298.24,
    },
    "weather": [
      {
        "main": "Clear"
      }
    ],
  },
  {
    dt_txt: "2022-08-30 12:02:00",
    main: {
      "temp_min": 276.34,
      "temp_max": 258.24,
    },
    "weather": [
      {
        "main": "Rain"
      }
    ],
  },
  {
    dt_txt: "2022-08-30 11:02:00",
    main: {
      "temp_min": 294.34,
      "temp_max": 228.24,
    },
    "weather": [
      {
        "main": "Cloudy"
      }
    ],
  }
]


const upcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
  )

    const {container,image} = styles
  return (
    <SafeAreaView style={container}>
      {/* Since we want to accept children we want to change it to not to use self closing tags. So add closing tag */}
      <ImageBackground source={require('../../assets/cloud_background.jpg')} style={image} >
        <Text>Upcoming weather</Text>

        <FlatList
          data={data} renderItem={renderItem} keyExtractor={(item) => item.dt_txt} />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'lavender'
  },
  image: {
    flex: 1,
  }
})
export default upcomingWeather;
