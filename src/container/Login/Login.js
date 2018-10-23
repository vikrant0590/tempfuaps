import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image,BackHandler,NetInfo,TextInput } from 'react-native';
import {Container, Content, Header, Form, Item, Input, Label , Button, Icon} from 'native-base';
import styles from './LoginStyle';
import {Actions as NavAction} from 'react-native-router-flux';
import { ApplicationStyles, Colors, Metrics, Images, Fonts } from '../../theme';
import {Font} from 'expo';
import { login } from '../../redux/modules/auth';
import PropTypes from 'prop-types';


export default class Login extends Component {
  static  propTypes = {
    dispatch: PropTypes.func,
  };

  static contextTypes = {
    store: PropTypes.object,
    login: PropTypes.object
  };

   constructor(props){
       super(props);
       this.state ={
           email:undefined,
           password:undefined
       }
   }

   onPressLoginButton = () => {
     console.log("hello")
    const {email, password} = this.state;
    if (email && password) {
        this.setState({isVisible: true});
        const {store: {dispatch}} = this.context;
        dispatch(login({email, password}))
          .then((res) => {
            console.log("LOgin res",res.status)
            if(res.status){
        
            this.setState({ isVisible:false});
            alert('Login successfully.');
            NavAction.forgot();
            }
          }).catch(() => {
            this.setState({isVisible: false});
             alert('Invalid Email and Password.');
          });

     
    } else if(email && !password){
       alert('Please Enter Password!');
    }else{
      alert('Please enter Email')
    }

  };


   render(){
       return(
   
        <Content style={{flex:1}}>
         <Container style={styles.container}>
            <View style={{flex:0.4,}}>
              <Image source ={Images.signin}  style={{width:Metrics.screenWidth, flex:1}}></Image>
            </View>
        <View style={{flex:0.48,flexDirection:"column",marginLeft:Metrics.screenWidth/10,marginRight:Metrics.screenWidth/10,marginTop:Metrics.screenHeight/10}}>
         <Item>
             <Image source={Images.messageGreen}/>
             <Input placeholder="Email" 
          value={this.state.email}
           placeholderTextColor={'#A3A3A3'}
           autoFocus={false}
           autoCorrect={false}
           autoCapitalize={'none'}
           onChangeText={(email) => {
             this.setState({email});
           }}
           onSubmitEditing={ (event) => { this.refs.Password._root.focus() }} 
           style={{marginLeft:Metrics.screenWidth/60}}
           />

         </Item>

         <Item>
        <Image source={Images.lockgreen}/>
          <Input
          ref="Password"
          placeholder="Password" 
          value={this.state.password}
          secureTextEntry={true} 
           placeholderTextColor={'#A3A3A3'}
           onChangeText={(password) => {
             this.setState({password});
           }}
           style={{marginLeft:Metrics.screenWidth/60}}
           />
        </Item>

            <TouchableOpacity onPress={this.onPressLoginButton}
                   style={{
                     marginTop:Metrics.screenHeight/22,
                     borderRadius:20,
                     width:Metrics.screenWidth/1.24,
                     height:35,
                     justifyContent:"center",
                     alignItems:"center",
                     backgroundColor:'#8CB102',
                  
                   }}>

                   <Text style={[styles.siginButtonText]}>SIGN IN</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={NavAction.forgot}>
                   <Text style={{fontSize:15,marginTop:Metrics.screenHeight/30,color:"#333333"}}>Forgot Password?</Text>
                   </TouchableOpacity>


        </View>

                <View style={{ height:0.4, backgroundColor:'#A3A3A3'}}></View>

                    <View style={{ 
          flex:0.1,
           flexDirection:"row", 
           justifyContent:"center",
           marginLeft:Metrics.screenWidth/10,
           marginRight:Metrics.screenWidth/10,
           }}>
 
 
            
           <Text style={{fontSize:14, color:"#797979",marginTop:Metrics.screenHeight/30,}}>Don't have an Account?</Text>
           <TouchableOpacity onPress={NavAction.signup}>
               <Text style={{fontSize:15,marginLeft:3, color:'#333333',marginTop:Metrics.screenHeight/30}}>SIGN UP NOW</Text>
               </TouchableOpacity>

          </View>

        </Container>
</Content>
       );
   }
}
