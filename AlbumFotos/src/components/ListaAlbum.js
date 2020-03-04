import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from "axios";
import Album from "./Album";
export default class ListaAlbum extends Component {
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
                <Text>sadkjsakjd</Text>
            </ScrollView>
        );
    }
}

//{this.state.ListaItem.map(item => (<Album key = {item.albumId} propItem = {item} />))}