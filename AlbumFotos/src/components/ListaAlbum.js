import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

//create list data
const dataList = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}, {key: '5'}, {key: '6'}, {key: '7'}, {key: '8'}, {key: '9'}, {key: '10'}]

export default class ListaAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _renderItem = ({item, index})=>{
  <Text>{item.key}</Text>
  }

  render() {
    return (
      <View>
        <FlatList data = {dataList} renderItem = {this._renderItem} keyExtractor = {(item, index) => index.toString()} />
      </View>
    );
  }
}



// import React, { Component } from 'react';
// import { ScrollView, Text } from 'react-native';
// import axios from "axios";
// import Album from "./Album";
// export default class ListaAlbum extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             ListaItem: []
//         };
//     }

//     componentWillMount() {

//         axios.get('https://jsonplaceholder.typicode.com/photos')
//             .then(response => { this.setState({ ListaItem: response.data }) })
//             .catch(() => { alert('ERRO') });

//     }

//     render() {
//         return (
//             <ScrollView>
//                 {this.state.ListaItem.map(item => (<Album propItem={item} />))}
//             </ScrollView>
//         );
//     }
// }

