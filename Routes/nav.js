

import React, {Component} from 'react';
import {TouchableOpacity , Image} from 'react-native'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import App from '../App'
import Splash from '../Screens/Splash'
import SignUpScreen from '../Screens/SignUpScreen'
import ForgetMyPassWord from '../Screens/ForgetMyPassWordScreen'

const AppNavigator = createStackNavigator({
    Home: {
      screen: Splash , 
      navigationOptions:{
        headerShown:false 
      }       
    }
    ,
    signUpScreen:{
      screen: SignUpScreen,
      navigationOptions:{
        headerShown:false 
      }       
    }  ,

    ForgetMyPassWord:{
      screen: ForgetMyPassWord ,
      navigationOptions:{
        title:'Forgot PassWord'   
      }
    } 
  },
  // {headerMode:'float'}
   );
  
  const AppContainer = createAppContainer(AppNavigator);
  export default AppContainer ; 
  