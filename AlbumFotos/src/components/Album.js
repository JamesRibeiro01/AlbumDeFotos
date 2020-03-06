import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <TouchableOpacity >
      <View style={Estilos.ContainerPrincipal}>

        <View style = {Estilos.containerThumb}>

          <View style={Estilos.imagemThumbnail}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: this.props.novaListaAlbum.thumbnailUrl }} />
          </View>

          <View>
            <Text style={Estilos.titulo}>{this.props.novaListaAlbum.albumId}</Text>
          </View>

        </View>
      </View>
      </TouchableOpacity>
    );
  }
}

const Estilos = StyleSheet.create({
  ContainerPrincipal: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
  imagemThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
  },

  titulo: {
    flex: 1,
    fontSize: 14,
    color: 'black'
  },

  containerThumb:{
    flex: 1,
    borderWidth: 1.0,
    borderColor: '#CCC',
  }
});
