import ApiService from '../../services/ApiService'
import { reset, SubmissionError } from 'redux-form'

//Actions related to making authentication requests

const authRequest = () => {
  return {
    type: 'AUTHENTICATION_REQUEST',
  }
}

const authSuccess = (user) => {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    user: user
  }
}

const authFailure = (errors) => {
  return {
    type: 'AUTHENTICATION_FAILURE',
    errors: errors 
  }
}

// Asynchronous function calls

export const signup = (user, router) => {
   return dispatch => {
     dispatch(authRequest())
     return ApiService.post('/users', user)
       .then(response => {
         const { user, token } = response
         localStorage.setItem('token', JSON.stringify(token))
         dispatch(authSuccess(user))
         dispatch(reset('signup'))
         router.history.replace('/dashboard')
       })
       .catch((error) => {
         console.log(error)
         throw new SubmissionError(error)
       })
   }
}

export const login = (user, router) => {
  return dispatch => {
    dispatch(authRequest());
    return ApiService.post('/auth', user)
      .then(response => {
        const { user, token } = response;
        localStorage.setItem('token', JSON.stringify(token));
        dispatch(authSuccess(user))
        dispatch(reset('login'));
        router.history.replace('/dashboard');
      })
      .catch((errors) => {
        console.log(errors)
        dispatch(authFailure(errors))
      })
  }
}

export const logout = (router) => {
  localStorage.removeItem('token')
  router.history.replace('/')
  return { type: 'LOGOUT' }
 }
