import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles';

import Subject from '../components/subject';

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      subjects: [
        'A',
        'B',
        'C',
        'D'
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.subjects.map((subject, key) => {
            return (
              <Subject subject={`Subject ${key + 1}`} key={key} />
            )
          })
        }
      </View>
    );
  }
}