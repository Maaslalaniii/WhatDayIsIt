import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles';

import Subject from '../components/subject';

const API_URL = 'https://wdii-api.herokuapp.com/';

// Constants for use in parameter of the _switchOrder() function
const DAY = {
  1: [1, 2, 3, 4],
  2: [3, 4, 1, 2],
  3: [2, 1, 4, 3],
  4: [4, 3, 2, 1]
}

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      currentDay: 1,
      subjects: [
        'Period A',
        'Period B',
        'Period C',
        'Period D'
      ]
    }
  }

  _getData() {
    // Get information from the opan.cf/day api and populate the state
    // https://github.com/Maaslalaniii/wdii-api
    fetch(API_URL)
      .then(response => response.json())
      .then(response => {
        let day = isNaN(response[1].day) ? 1 : response[1].day;
        this.setState({ currentDay: day });
      })
  }

  componentWillMount() {
    this._getData();
    this._switchOrder(DAY[this.state.currentDay]);
  }

  /**
   * Provide the order as an array of length 4,
   * containing number 1 through 4.
   * Example: [3, 2, 4, 1]
   * 
   * You may also use the declared constant above, such as
   * DAY[1], DAY[2], DAY[3], DAY[4]
   */
  _switchOrder(order) {
    let subjects = this.state.subjects;

    // Map the period number to its index by subtracting 1.
    order = order.map((index) => index - 1);

    let newOrder = [];

    // Push the subjects using the order given.
    for (let i = 0; i < order.length; i++) {
      newOrder.push(subjects[order[i]]);
    }

    this.setState({ subjects: newOrder });

  }

  _updateSubjects(key) {
    let subjects = this.state.subjects;
    subjects[key] = this.refs[`key-${key}`].state.subject;
    this.setState({ subjects });
  }

  componentDidMount() {
    alert('Tap the subjects to enter editing mode and enter your semester subjects.');
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.subjects.map((subject, key) => {
            return (
              <Subject
                ref={`key-${key}`}
                subject={subject}
                index={key}
                key={key}
                onChange={() => this._updateSubjects(key)} />
            )
          })
        }
      </View>
    );
  }
}