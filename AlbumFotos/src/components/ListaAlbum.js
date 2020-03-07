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
                  <View style={Estilos.imagemContainer}>
                    <Image style={{ width: 100, height: 100 }} source={{ uri: item.url }} />
                    <View style = {Estilos.titulo}>
                      <Text>{item.title}</Text>
                    </View>
                  </View>

                </TouchableOpacity>

              </View>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1} />
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
  imagemContainer: {
    flex: 1,
    borderWidth: 1.0,
    borderColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 60
  },

  titulo: {
    flex: 1,
    fontSize: 10,
    color: 'black'
  }
});