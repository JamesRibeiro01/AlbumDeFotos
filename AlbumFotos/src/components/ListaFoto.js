import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from "axios";
import ItemFoto from "./ItemFoto";
export default class ListaFoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListaItem: []
        };
    }

    componentWillMount() {

        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => { this.setState({ ListaItem: response.data }) })
            .catch(() => { alert('ERRO') });
        //   axios.get('https://jsonplaceholder.typicode.com/photos')
        //        .then(response => {console.log(response)})
        //        .catch(()=>{alert('ERRO')})

    }

    render() {
        return (
            <ScrollView>
                {this.state.ListaItem.map(item => (<ItemFoto key = {item.albumId} propItem = {item} />))}
            </ScrollView>
        );
    }
}
