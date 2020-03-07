import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar, Image, StyleSheet, TouchableOpacity, Platform, ActivityIndicator, ToastAndroid } from 'react-native';
import Album from "./Album";
import axios from 'axios';

export default class ListaAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaFotos: []
    };
  }

  componentDidMount() {

    return fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ listaFotos: responseJson });
      }).catch((error) => { ToastAndroid.show(error.toString(), ToastAndroid.SHORT) });
  }

  render() {
    return (
      <View style={Estilos.ContainerPrincipal}>
        <StatusBar backgroundColor='grey' />
        <FlatList data={this.state.listaFotos}
          renderItem={({ item }) => {
            return (
              <View>

                <TouchableOpacity>
                  <View style = {Estilos.imagemUrl}>
                    <Image style={{ width: 100, height: 100 }} source={{ uri: item.imagemUrl }} />
                  </View>
                </TouchableOpacity>

              </View>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3} />
      </View>
    );
  }
}


const Estilos = StyleSheet.create({
  ContainerPrincipal: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
  imagemUrl: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  titulo: {
    flex: 1,
    fontSize: 14,
    color: 'black'
  },

  containerThumb: {
    flex: 1,
    borderWidth: 1.0,
    borderColor: '#CCC',
  }
});