
import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default class Album extends Component {

  render() {
    return (
      <View style = {Estilo.container}>
        <Text> Album </Text>
      </View>
    );
  }
}

const Estilo = StyleSheet.create({
  container: {
    flex: 1
  }
});


// import React, { Component } from 'react';
// import { View, StyleSheet, Image, Dimensions } from 'react-native';

// const {width} = Dimensions.get('window');
// const numberGrid = 3;
// const itemWidth = width/numberGrid;

// export default class Album extends Component {

//   render() {
//     return (
//       <View style = {Estilos.container}>
//         <Image style = {Estilos.itemAlbum} source = {{uri: this.props.propItem.url}} />
//       </View>
//     );
//   }
// }



// const Estilos = StyleSheet.create({
//   container:{
//     flex: 1
//   },

//   itemAlbum:{
//     width: itemWidth,
//     height: itemWidth
//   }
// });
