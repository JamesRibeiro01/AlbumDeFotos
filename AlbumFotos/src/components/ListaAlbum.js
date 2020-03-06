import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, FlatList, StatusBar, StyleSheet } from 'react-native';
import Album from "./Album";
import axios from 'axios';

export default class ListaAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaFotos: []
    };
  };


  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => { this.setState({ listaFotos: response.data }) })
  }

  render() {
    return (

      <View>
        <StatusBar backgroundColor='grey' />
        <FlatList data={this.state.listaFotos}
          renderItem={({ item }) => {
            return (
              <View>
              <Image source={{uri: item.thumbnailUrl}} />
              </View>
            )
          }}
          keyExtractor={(index) => { return index }}
          numColumns={3} />
      </View>
    );
  }
}


