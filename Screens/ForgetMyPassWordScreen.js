import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Dimensions , Image , TextInput, Button , TouchableOpacity}  from 'react-native';

var arr = [];
type Props = {};
export default class Splash extends Component<Props> {

     constructor(props){
         super(props) ;

         this.state= {
             pass: this.props.navigation.state.params.pass ,
             flag: false ,
         }
     }
       
     checkIfMach(){
         var {pass} = this.state
         for(var i = 0 ; i< arr.length ; i++ ){
             if (arr[i] != pass[i])
             return false ; 
         }
         this.setState({flag:true});
     }


    render(){
        const {flag} = this.state
        const red = {color:'red'} ; 
        const green = {color:'#02aa96' , fontSize:25}
        const styleText = flag? green : red ;
        
        return(
            <View style={styles.container}>
                <Image source={require('../images/Untitled.png')} />

               <Text style={[{marginTop:20}, styleText]}>{ !flag ? this.state.pass : 'Your PassWord have been Reset !'}</Text>

                <Text style={styles.h1}>Check Your Email</Text>
                <Text style={styles.h2} >Please enter here</Text>
                <Text style={styles.h2}>you verification code </Text>

                <View style={styles.inputContainer}>
                    <TextInput
                    keyboardType='number-pad'
                     maxLength={1}
                    //  onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    onChangeText={(val) => { if (val.length === 1) {
                        this.secondTextInput.focus(); arr[0] = val }
                    }}
                     style={styles.input}
                    //  blurOnSubmit={false}
                     />

                    <TextInput 
                    keyboardType='number-pad'
                    // onSubmitEditing={() => { this.therdTextInput.focus(); }}
                    ref={(input) => { this.secondTextInput = input; }} 
                    maxLength={1} style={styles.input}
                    onChangeText={(val) => { if (val.length === 1) {this.therdTextInput.focus(); arr[1] = val }}}
                    // blurOnSubmit={false}
                    />

                    <TextInput
                    keyboardType='number-pad'
                    onChangeText={(val) => { if (val.length === 1) {this.forthTextInput.focus(); arr[2] = val }}}
                    ref={(input) => { this.therdTextInput = input; }} 
                     maxLength={1} style={styles.input}/>


                    <TextInput
                    keyboardType='number-pad'
                    ref={(input) => { this.forthTextInput = input; }} 
                    onChangeText={(val) => { if (val.length === 1) {this.fifthTextInput.focus(); arr[3] = val }}}
                     maxLength={1} style={styles.input}/>

                    <TextInput 
                    keyboardType='number-pad'
                    ref={(input) => { this.fifthTextInput = input; }} 
                    onChangeText={(val) => {if (val.length === 1) { this.sixthTextInput.focus(); arr[4] = val }}}
                    maxLength={1} style={styles.input}/>


                    <TextInput 
                    keyboardType='number-pad'
                    ref={(input) => { this.sixthTextInput = input; }} 
                    onChangeText={(val) => { if (val.length === 1) {this.sixthTextInput.focus(); arr[5] = val ; this.checkIfMach() }}}
                    maxLength={1} style={styles.input}/>

                </View>

               <TouchableOpacity ref={2} style={styles.resetContainer}>
                   <Text style={styles.reset}>RESET</Text>
               </TouchableOpacity> 

               <Text style={styles.h3}>Didn't get You mail?</Text>
               
               <TouchableOpacity>
                   <Text style={styles.h3Green}>Send agin</Text>
               </TouchableOpacity> 

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer:{
        flexDirection:'row' , 
        justifyContent:'space-evenly' , 
        width:'100%' , 
        marginTop: 25 ,
    },
    input:{
        width:'14%' , 
        height: 50 , 
        borderWidth:1 , 
        borderRadius : 10 , 
        borderColor:'#88919b' , 
        textAlign:'center' ,
        fontSize: 20 , 
        fontWeight: '400' , 
    },
    h1:{
        fontSize:20 ,
        color:'#191c24' , 
        fontFamily: Platform.OS === 'android' ? "Poppins" : null ,
        fontWeight:'700',
        marginTop:20 ,
    },
    h2:{
        fontSize:16 ,
        color:'#191c24' , 
        fontFamily: Platform.OS === 'android' ? "Roboto" : null ,
        fontWeight:'300',
    },
    h3:{
        fontSize:16 ,
        color:'#191c24' , 
        fontFamily: Platform.OS === 'android' ? "Roboto" : null ,
        fontWeight:'500',
    },
    h3Green:{
        fontSize:16 ,
        color:'#02aa96' , 
        fontFamily: Platform.OS === 'android' ? "Roboto" : null ,
        fontWeight:'500',
    },
    reset:{
        fontSize:16 ,
        color:'#ffffff' , 
        fontFamily: Platform.OS === 'android' ? "Roboto" : null ,
        fontWeight:'700',
        letterSpacing:0 ,
    }, 
    resetContainer:{
        backgroundColor:'#00a18e' , 
        width:'50%' , 
        height: 50 , 
        justifyContent:'center' ,
        alignItems:'center' , 
        marginTop : 20 , 
        marginBottom : 20 , 
    }
});