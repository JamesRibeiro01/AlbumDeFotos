import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Album extends Component {

  render() {
    return (
      <View>
        <Text> {this.props.propItem.title} </Text>
      </View>
    );
  }
}
