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
        {this.state.listaFotos.map(item => (<Album key = {item.albumId} novaListaAlbum = {item}/>))}
      </View>
    );
  }
}


