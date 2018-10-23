import api from '../../helpers/ApiClient';
import config from '../../config/app'
import { AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';
import TimerMixin from 'react-timer-mixin';



const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';

const REGISTER = 'register/REGISTER';
const REGISTER_SUCCESS = 'register/REGISTER';
const REGISTER_FAIL = 'register/REGISTER';


const initialState = {
  user: undefined,
  userProfile:undefined,
  detail:undefined,
  trackListData:undefined,
  videoFinish:undefined,
  email:undefined,
  dash:undefined
  
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // Signin
    case LOGIN:
      return { ...state };
    case LOGIN_SUCCESS:
      return { ...state, user: action.result, email:action.email };
    case LOGIN_FAIL:
      return { ...state };

   //signup

      case REGISTER:
      return { ...state };
    case REGISTER_SUCCESS:
      return { ...state,user: action.result,  email:action.email };
    case REGISTER_FAIL:
      return { ...state, };

    default:
      return state;
  }
}

export function login(data) {
  console.log("LOGIN DATA", data);
  return (dispatch, getState) => new Promise((resolve, reject) => {
    dispatch({ type: LOGIN });
    api
      .post('users/signin', data)
      .then((res) => {
        console.log("LOGIN response123",res);
        
        dispatch({ type: LOGIN_SUCCESS, result: res ,email:data.email});
         resolve(res);
       
      })
      .catch((ex) => {
        console.log("CATCH CALLED");
        dispatch({ type: LOGIN_FAIL });
        reject(ex);
      });
  });
}


// export  function register(data) {
//   console.log("SIGNUP DATA",data);
//   return (dispatch, getState)  => new Promise((resolve, reject) => {
//     dispatch({ type: REGISTER });
//     api
//       .post('user/signup', data)
//       .then((res) => {
//         console.log("SIGNUP RESPONSE",res);
//         dispatch({ type: REGISTER_SUCCESS, result: res,email:data.email });
     
//         AsyncStorage.setItem('userCredentials', JSON.stringify(data));
//         AsyncStorage.setItem('token', JSON.stringify(res));
//         resolve(res);
      
//       })
//       .catch((ex) => {
//         dispatch({ type: REGISTER_FAIL });
//         reject(ex);
//       });
//   });
// }



// export function videoFinish(){
//   console.log("Video FUNISHED REDUX MESSAGE")

// }


