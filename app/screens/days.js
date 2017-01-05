import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles';

const API_URL = 'https://wdii-api.herokuapp.com/';

export default class Days extends Component {
  constructor(props) {
    super(props);
    // Let the days state be a falsey value such that the loading text will be shown
    this.state = {
      days: undefined
    }
  }

  componentWillMount() {
    // Get information from the opan.cf/day api and populate the state
    // https://github.com/Maaslalaniii/wdii-api
    fetch(API_URL)
      .then(response => response.json())
      .then(response => this.setState({ days: response }))
  }

  render() {
    return (
      <View style={styles.container}>

        {
          // While state is still undefined show a loading text view.
          !this.state.days ? <Text style={styles.loading}>Loading...</Text> : 
          
          // When the state is populated render that information. 
          this.state.days.map((day, key) => {
            return (
              <View style={styles.days} key={key}>
                <Text style={styles.date}>{day.date}</Text>
                <Text style={styles.day}>{day.day}</Text>
                <Text style={styles.events}>
                  {
                    day.events.map((dayEvent, key) => <Text key={key}>{dayEvent}</Text>)
                  }
                </Text>
              </View>
            );
          })
        }

      </View>
    );
  }
}