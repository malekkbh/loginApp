/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Dimensions} from 'react-native';
import {BoxShadow} from 'react-native-shadow'


const pageHieght = Dimensions.get('window').height ; 
const pageWidth = Dimensions.get('window').width;

type Props = {};
export default class Splash extends Component<Props> {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.replace('signUpScreen')
    }
       , 1200);
  }

  render() {

   


    const shadowOpt = {
      width:pageWidth * 0.95,
      height:pageWidth * 0.95,
      color:"#086265",
      // color:'#00000' ,
      border:2,
      radius:(pageWidth * 0.91)/2 - 20 ,  
      opacity:0.16,
      x:20,
      y:300,
      style:{marginVertical:5}
    }
    return (
        <View style={styles.container}>

          <View style={[styles.outer]}>
              <View style={styles.inner}>
                <Text style={styles.header}>BOOM<Text style={{color:'#02aa96'}}>25</Text></Text>
                <Text style={styles.h2}>in it to win it</Text>
              </View>
          </View>
        </View>


         
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  outer:{
    borderWidth: 3 , 
    borderColor: '#2fa49c',
    borderRadius: 3000 , 
    width: pageWidth * 0.9 , 
    // height: Platform.OS === 'ios' ? pageHieght * 0.40 : pageHieght * 0.45  , 
    height : pageWidth * 0.9 ,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'red' ,
    shadowColor: '#086265' ,
    shadowOpacity:0.3,
    shadowRadius: 2.8 ,
    shadowOffset: { width: 3, height: 8 },
    elevation:4 , 
    position:"relative",

  },
  inner:{
    width: '80%' ,
    height: '80%',
    borderRadius: 3000 ,
    // filter: drop-shadow(2.828px 2.828px 6px rgba(20,126,114,0.15));
    backgroundColor: '#ffffff' ,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1 , 
    borderColor:'#147e72' ,
    borderColor:'#147e72' ,
  },
  header:{
    // marginTop: Platform.OS === 'ios' ? pageHieght * 0.05 : pageHieght * 0.02 ,
    textAlign:'center' , 
    fontSize:55 ,
    fontWeight: '900' ,
    color: '#191c24' ,
    fontFamily: Platform.OS == 'ios' ? null : 'Poppins' ,
},
h2:{
  // marginTop: Platform.OS === 'ios' ? pageHieght * 0.05 : pageHieght * 0.02 ,
  textAlign:'center' , 
  fontSize:25 ,
  fontWeight: '800' ,
  color: '#191c24' ,
  fontFamily: Platform.OS == 'ios' ? null : 'Poppins' ,
},
});
