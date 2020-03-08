import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar, Image, StyleSheet, TouchableOpacity, Platform, ActivityIndicator, ToastAndroid } from 'react-native';
import axios from 'axios';

export default class ListaAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaFotos: []
    };
  }

  componentWillMount() {

    return fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ listaFotos: responseJson });
      }).catch((error) => { ToastAndroid.show(error.toString(), ToastAndroid.SHORT) });

    // axios.get('https://jsonplaceholder.typicode.com/photos')
    //      .then(response =>{this.setState({listaFotos: response.data})})
    //      .catch(()=>{alert('error')})
  }

  render() {
    return (
      <View style={Estilos.ContainerPrincipal}>
        <StatusBar backgroundColor='grey' />
        <FlatList data={this.state.listaFotos}
          numColumns={2}
          keyExtractor={(item) => { return item.id }}
          renderItem={({ item }) => {
            return (
              <View style = {Estilos.cartao}>

                <TouchableOpacity>
                  <View style={Estilos.imagemContainer}>
                    <Image style={Estilos.imagem} source={{ uri: item.url }} />
                    <View style={Estilos.titulo}>
                      <Text>{item.title}</Text>
                    </View>
                  </View>
                </TouchableOpacity>

              </View>
            )
          }}

        />
      </View>
    );
  }
}


const Estilos = StyleSheet.create({
  ContainerPrincipal: {
   flex: 1,
   marginTop: 20
  },
  imagemContainer: {
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.36
  },

  titulo: {
    flex: 1,
    fontSize: 10,
    color: 'black'
  },

  imagem:{
      flex: 1,
      height: 150,
      width: null
  },

  cartao:{
    marginVertical: 8,
    backgroundColor: 'white',
    flexBasis: '45%',
    marginHorizontal: 10
  }
});