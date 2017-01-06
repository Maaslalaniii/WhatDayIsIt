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

  _renderSubject() {
    return (
      <TouchableHighlight
        underlayColor='#EEE'
        onPress={() => this.setState({ editing: true })}
        style={[styles.container, styles.subject]} >
        <Text>{this.state.subject}</Text>
      </TouchableHighlight>
    )
  }

  _renderSubjectEditing() {
    return (
      <TouchableHighlight
        underlayColor='#EEE'
        onPress={() => this.setState({ editing: false })}
        style={[styles.container, styles.subject]} >
        <TextInput
          style={styles.textInput}
          onChangeText={(subject) => this.setState({ subject })}
          value={this.state.subject}
          onSubmitEditing={() => {
            this.props.onChange(this.props.index)
            this.setState({ editing: false })
          }}
          onBlur={() => this.setState({ editing: false })} />
      </TouchableHighlight>
    )
  }

  render() {
    return (
      this.state.editing
      ? this._renderSubjectEditing()
      : this._renderSubject()
    );
  }
}