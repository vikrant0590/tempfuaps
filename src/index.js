import React, { Component } from 'react';
import {Text, StyleSheet, Platform, View, Alert, BackHandler} from 'react-native';
import {
   Login,
   Signup,
   Forgot
  
} from './container';
import {  Colors, Metrics, Images } from './theme';
 import { Asset, AppLoading, Stack } from 'expo';


import { Router, Scene, Actions as NavigationActions } from 'react-native-router-flux';


const Styles = {
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: Colors.BaseColor,
    borderBottomWidth: 0,
  },
  dashboardNavBar: {
    flex:1,
    backgroundColor: Colors.background,
  },
  title: {
    color: Colors.snow
  },

  navTitle: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  
 
  renderTitleStyle: {
    alignSelf: 'center',
    width: null,
    ...Platform.select({
      ios: {
        top:  30, 
      },
      android: {
        top: 20,
      },
    }),
    right: 0,
  },
  titleTextStyle: {
    textAlign: 'center',
    color:'white',
    fontSize: 17,
  },
 

};



export default class AppRouter extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      loading: true,
      isVisible:false,
      isReady:false
    };

  }

  
  componentWillMount = async () => {
    console.log("WILL MOUNT")
    

  }

    render() {
     
      if (!this.state.loading) {
        return (
          <AppLoading
            startAsync={this._cacheResourcesAsync}
            onFinish={() => this.setState({ loading: true })}
            onError={console.warn}
          />
        );
      }
        return (
         
          <Router>
          <Stack key="root">
            <Scene key="login" component={Login} hideNavBar={true}/>
            <Scene key="signup" component={Signup} hideNavBar={true}/>
            <Scene key="forgot" component={Forgot} hideNavBar={false}/>
          </Stack>
        </Router>
    );
  }
}
const onExitApp = () => {
  Alert.alert(
    'Tempfu',
    'Are you sure to exit this app ?',
    [
      { text: 'Cancel', onPress: () => {} },
      { text: 'Ok', onPress: () => BackHandler.exitApp() },
    ]
  );
  return true;
};
