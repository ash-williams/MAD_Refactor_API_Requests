import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { getRequest } from './api';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      data: null
    }
  }

  componentDidMount(){
    getRequest(
      "https://api.chucknorris.io/jokes/random", 
      (resJson) => {
        this.setState({
          loading: false,
          data: resJson
        })
      },
      (status) => {
        console.log(status)
      })
  }

  render(){
    if(this.state.loading){
      return (
        <Text>Loading...</Text>
      )
    }else{
      return (
        <View style={styles.container}>
          <Text>{this.state.data.value}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
