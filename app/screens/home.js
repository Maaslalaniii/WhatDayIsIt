import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

// Import the data from a seperate file.
import events from '../data/events';

import styles from '../styles';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Important Events</Text>
        <ScrollView style={styles.events}>
          {
            events.map((event, key) => {
              return (
                <View style={styles.event} key={key}>
                  <Text style={styles.eventDate}>{event.date}</Text>
                  <Text style={styles.eventEvent}>{event.event}</Text>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    );
  }
}