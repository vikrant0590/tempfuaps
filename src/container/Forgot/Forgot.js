import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image,BackHandler,NetInfo,TextInput } from 'react-native';
import {Container, Content, Header, Form, Item, Input, Label , Button, Icon} from 'native-base';
import {Actions as NavAction} from 'react-native-router-flux';
import { ApplicationStyles, Colors, Metrics, Images, Fonts } from '../../theme';
import {Font} from 'expo';
// import { toast } from '../../helpers/ToastMessage';
import { connect } from 'react-redux';
import PropTypes, { array } from 'prop-types';

class Forgot extends Component {
   constructor(props){
       super(props);
       this.state ={
           email:undefined,
           password:undefined
       }
   }
   static  propTypes = {
    dispatch: PropTypes.func,
  };

  static contextTypes = {
    store: PropTypes.object,
    login: PropTypes.object
  };
  componentWillMount(){
   console.log("redux login data",this.props.auth)
  }

   render(){
       return(
           <View>
               <Text>Forgot</Text>
           </View>
       )
   }
 

}
const mapStateToProps = (state) => {
    return {
      auth: state.auth
    };
  };
  const  mapDispatchToProps = {
  
  };
  export default  connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(Forgot)