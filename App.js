/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , FlatList , ActivityIndicator , BackHandler , I18nManager } from 'react-native';
import AppContainer from './Routes/nav'

type Props = {};

export default class App extends Component<Props> { 

  constructor(props){
    super(props)

    I18nManager.allowRTL(false);  
  }
  render() {
    return(
      <View style={{flex:1}}>
          <AppContainer/>   
      </View>
      
    )
  }
 
}

const styles = StyleSheet.create({
  footer:{
    height:50 , 
    backgroundColor:'#cde7f0'  , 
    zIndex:9 ,
    alignContent:'center' ,
    justifyContent:'center',
  }, 
  text:{
    textAlign:'center' , 
    color:'white' , 
    fontWeight:'bold',
    fontSize:20 ,
    color:'black'

  }
});

