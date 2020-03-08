import React, { Component } from 'react';
import { View, 
         Text, 
         FlatList,
         Image,
        TouchableOpacity,
        ToastAndroid } from 'react-native';
import FolhaEstilos from "../Styles/FolhaEstilos";
//import axios from 'axios';

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
      <View style={FolhaEstilos.ContainerPrincipal}>

        <FlatList 
          data={this.state.listaFotos}
          numColumns={2}
          keyExtractor={(item) => { return item.id }}
          renderItem={({ item }) => {
            return (
              <View style={FolhaEstilos.cartao}>
                
                <TouchableOpacity>
                  <View style={FolhaEstilos.imagemContainer}>
                    <Image style={FolhaEstilos.imagem} source={{ uri: item.url }} />
                    <View style={FolhaEstilos.titulo}>
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