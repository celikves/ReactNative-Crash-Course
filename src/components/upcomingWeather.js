import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  View,
  StatusBar,
  ImageBackground,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

//IonIcon.loadFont();
//core components usully come with props which can be used.

// prop is short for property. They are used to pass data from parent to child. We can use props to customize our components. MOST IMPORTANTLY IT PROMOTES COMPONENT REUSUABLİTY.

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

const Item = (props) => {
  const { dt_txt, min, max, condition } = props
  return (
    <View style={styles.item}>
      <Text>
        <IonIcon name="ios-sunny" size={50} color="yellow"></IonIcon>
      </Text>
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const upcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
  )
  return (
    <SafeAreaView style={styles.container}>
      {/* Since we want to accept children we want to change it to not to use self closing tags. So add closing tag */}
      <ImageBackground source={require('../../assets/cloud_background.jpg')} style={styles.image} >
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
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around', // items around evenly distributed
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink',
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  image: {
    flex: 1,
  }
})
export default upcomingWeather;
