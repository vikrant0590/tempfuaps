import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image,BackHandler,NetInfo,TextInput } from 'react-native';
import {Container, Content, Header, Form, Item, Input, Label , Button, Icon} from 'native-base';
import styles from './SignupStyle';
import {Actions as NavAction} from 'react-native-router-flux';
import { ApplicationStyles, Colors, Metrics, Images, Fonts } from '../../theme';
import {Font} from 'expo';
// import { toast } from '../../helpers/ToastMessage';
export default class Signup extends Component {
   constructor(props){
       super(props);
       this.state ={
           email:undefined,
           password:undefined
       }
   }
   render(){
       return(
   
       <View>
           <Text>Signup</Text>
       </View>
       );
   }
}
