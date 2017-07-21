import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

import MapComp from '../components/MapComp'
import EventList from './EventList';
import Header from './Header';

class Main extends Component {

  render() {


    return (
      <View style={styles.container}>
        <Header headerText={'What\'s Occurring?'} />
        <MapComp />
        <EventList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  }
})

export default Main