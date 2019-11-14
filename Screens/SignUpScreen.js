import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Dimensions , TextInput , Button ,TouchableOpacity , Image , BackHandler }  from 'react-native';
import {BoxShadow} from 'react-native-shadow'


const pageHieght = Dimensions.get('window').height ; 
const pageWidth = Dimensions.get('window').width;

type Props = {};
export default class Splash extends Component<Props> {

    signUp(){
        var arr = [] ; 
        for(var i = 0 ; i< 6 ; i++ ){
            var x = Math.floor(Math.random() * 10);
            arr.push(x) ; 
        }

        this.props.navigation.push('ForgetMyPassWord' , {pass:arr} )
    }

    // componentDidMount(){
    //     BackHandler.addEventListener('hardwareBackPress' , () => {
        
    //         return true ; 
    //     })
    //   }

    //   componentWillUnmount(){
    //     this.backHandler.remove()
    // }
    

  render() {
    
    const user = require('../images/icons8-user.png')
    
    return (
        <View style={styles.container}>

            <Text style={styles.header}>BOOM
                    <Text style={{color:'#02aa96'}}>25</Text>
            </Text> 

            <Text style={styles.h2}>You Have a Welcome bonus!</Text>
            <Text style={styles.h3}>SignUp now and collect  
            <Text style={{color:'#02aa96'}}>{" "}1€</Text>
            </Text>

            <View style={styles.headerView}>
                <View style={styles.line}></View>
                <Text style={{color:'#88919b'}} >{"  "}Sign Up With{"  "}</Text>
                <View style={styles.line} ></View>
            </View>

            <TouchableOpacity style={[styles.LoginBtn ,{backgroundColor: '#3b5998'}]}>
                <Image style={styles.logo} source={require('../images/facebookLogo.png')} />
                <Text style={styles.LoginBtnText}>Log In With Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.LoginBtn ,{backgroundColor: '#ea4335'}]}>
                <Image style={styles.logo} source={require('../images/icons8-google_logo.png')} />    
                <Text style={styles.LoginBtnText}> Log In With Gmail</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.LoginBtn ,{backgroundColor: '#191c24'}]}>
                <Image style={styles.logo} source={require('../images/icons8-mac_os_filled.png' )} />    
                <Text style={styles.LoginBtnText}>Log In With Apple</Text>
            </TouchableOpacity>

            <View style={styles.headerView}>
                <View style={styles.line}></View>
                <Text style={{color:'#88919b'}}>{"  "}OR Sign Up With{"  "}</Text>
                <View style={styles.line} ></View>
            </View>
            
            <View style={styles.input} > 
            <Image style={{marginRight:3 , marginLeft:10}} source={require('../images/icons8-user.png')}/>
            <TextInput  placeholder= {'Full Name'}/> 
            </View>

            <View style={styles.input} > 
            <Image style={{marginRight:3 , marginLeft:10}} source={require('../images/icons8-gmail.png')}/>
            <TextInput  placeholder= {'Email Address'}/> 
            </View>

            <View style={styles.input} > 
            <Image style={{marginRight:3 , marginLeft:10}} source={require('../images/icons8-lock2.png')}/>
            <TextInput  placeholder= {'PassWord'}/> 
            </View>


            <TouchableOpacity onPress={() => this.signUp() } style={[styles.LoginBtn ,{backgroundColor: '#abe6db' , width: pageWidth * 0.35 , height: 40 , justifyContent: 'center' }]}>
                <Text style={[styles.LoginBtnText , ] }>Sign Up</Text>
            </TouchableOpacity>

            <View style={{ flexDirection:'row' , alignItems:'center'}}>   
  
                <Text style={[styles.h3 , ]}>Already Have account ? </Text>
                <TouchableOpacity>
                <Text style={[styles.h3 ,{color:'#02aa96'}]} > Log in now </Text>
                </TouchableOpacity>
            

            </View>

            

            <View style={{bottom: 25 ,  position : 'absolute' , flexDirection:'row'}}>
                <Text style={styles.terms}>By signing up you agree to the </Text>
                <TouchableOpacity>
                    <Text style={[styles.terms , {color:'#191c24'}]} > Terms {'&'} conditions</Text>
                </TouchableOpacity>       
             
            </View>  

        </View>
 
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
      alignItems: 'center',
    },
    header:{
        marginTop: Platform.OS === 'ios' ? pageHieght * 0.05 : pageHieght * 0.02 ,
        textAlign:'center' , 
        fontSize:25 ,
        fontWeight: '700' ,
        color: '#191c24' ,
        fontFamily: Platform.OS == 'ios' ? null : 'Poppins' ,
    },
    h2:{
        marginTop: pageHieght * 0.03 ,
        fontSize:20 ,
        fontWeight: '700' ,
        color: '#191c24' ,
    },
    h3:{
        marginTop: pageHieght * 0.02 ,
        fontSize:16 ,
        fontFamily: Platform.OS == 'ios' ? null : 'Roboto' ,
        fontWeight : '700' , 
        color: '#191c24' ,
    },
    headerView:{
        justifyContent:'center' , 
        marginTop:16 ,
        alignContent:'space-between' , 
        alignItems:'center',
        flexDirection:'row' , 
        width:'100%' , 
        height:30, 

    },
    line:{
        height:0 ,
        width:'30%' ,
        borderWidth:1 , 
        alignSelf: 'center',
        borderColor:'#88919b' ,
    },
    LoginBtn:{
        width: pageWidth * 0.58   ,
        height: 48 ,
        borderRadius: 5 ,
        justifyContent: 'flex-start',    
        alignItems:'center' ,  
        marginTop:pageHieght * 0.02 , 
        flexDirection:'row' , 
    },
    LoginBtnText:{
        fontSize: 14 ,
        lineHeight: 18 ,
        color: '#ffffff' ,
        fontFamily: Platform.OS === 'android' ? "Roboto" : null ,
        fontWeight: '400' ,
        textAlign:'left' ,
    },
    input:{
        width:'95%' ,
        borderWidth:1 , 
        height:'6%' , 
        borderRadius: 8 , 
        marginTop:pageHieght * 0.02 , 
        borderColor:'#adb5be' , 
        justifyContent :'flex-start' , 
        alignContent:'center' , 
        alignItems:'center' , 
        flexDirection:'row'
    },
    btn:{
        width:140 , 
        height:40 , 
        marginTop:30 , 
    },
    terms:{
        fontSize:10 , 
        color:'#bdbdbd' , 
        fontFamily: Platform.OS === 'android' ? "Roboto" : null ,
        fontWeight:'400' , 
        // bottom: 25 , 
        // position : 'absolute' ,
    },
    logo:{
        marginLeft: pageWidth * 0.05 , 
        marginRight: pageWidth * 0.05 , 
        height : 25 , 
        width : 25 , 
    },
});