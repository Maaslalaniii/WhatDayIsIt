import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StatusBar
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import Home from './app/screens/home';
import Days from './app/screens/days';
import Schedule from './app/screens/schedule';

import styles from './app/styles';

// Colours
const primaryColour = '#34495e';
const secondaryColour = '#2C3E50';

export default class WhatDayIsIt extends Component {
  render() {
    return (
      <View style={[styles.container, styles.home]}>
      
        <StatusBar backgroundColor={primaryColour} />

        <View style={styles.header}>
          <Text style={styles.headerTitle} >What Day Is It?</Text>
        </View>
        
        <ScrollableTabView
          tabBarBackgroundColor={secondaryColour}
          tabBarActiveTextColor='#ecf0f1'
          tabBarInactiveTextColor='#bdc3c7'
          tabBarUnderlineStyle={{backgroundColor: '#ecf0f1'}} >

          <Home tabLabel='Home'></Home>
          <Days tabLabel='Days'></Days>
          <Schedule tabLabel='Schedule'></Schedule>

        </ScrollableTabView>
      
      </View>
    );
  }
}

AppRegistry.registerComponent('WhatDayIsIt', () => WhatDayIsIt);
