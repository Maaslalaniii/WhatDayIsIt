import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';

import styles from '../styles';

export default class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      subject: this.props.subject
    }
  }

  render() {
    return (
      !this.state.editing ?
      
      <TouchableHighlight underlayColor='#EEE' onPress={() => this.setState({editing: true})} style={[styles.container, styles.subject]}>
        <Text>{this.state.subject}</Text>
      </TouchableHighlight>
      
      :

      <TouchableHighlight underlayColor='#EEE' onPress={() => this.setState({editing: false})} style={[styles.container, styles.subject]}>
        <TextInput style={styles.textInput} onChangeText={(subject) => this.setState({subject})} value={this.state.subject} onSubmitEditing={() => this.setState({editing: false})} onBlur={() => this.setState({editing: false})} />
      </TouchableHighlight>

    );
  }
}