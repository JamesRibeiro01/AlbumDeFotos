import React, { Component } from 'react';
import { StyleSheet} from 'react-native';

export default FolhaEstilos = StyleSheet.create({
    ContainerPrincipal: {
      flex: 1,
      marginTop: 20
    },
    imagemContainer: {
      shadowColor: "#000",
      shadowOffset: {
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
  
    imagem: {
      flex: 1,
      height: 150,
      width: null
    },
  
    cartao: {
      marginVertical: 8,
      backgroundColor: 'white',
      flexBasis: '45%',
      marginHorizontal: 10
    }
  });