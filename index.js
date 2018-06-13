// import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Calender } from 'react-date-range';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// render it in a device
AppRegistry.registerComponent('albums', () => App);
