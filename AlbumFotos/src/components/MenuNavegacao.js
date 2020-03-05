import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MenuNavegacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Estilos.barraNavegacao}>
        
      </View>
    );
  }
}

const Estilos = StyleSheet.create({
    barraNavegacao:{
        flex: 1,
        backgroundColor: 'green',
        height: 60
    }
})
