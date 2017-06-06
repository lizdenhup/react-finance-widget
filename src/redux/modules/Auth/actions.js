export const authRequest = () => {
  return {
    type: 'AUTHENTICATION_REQUEST',
  }
}

export const authSuccess = (user) => {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    user: user
  }
}

export const authFailure = (errors) => {
  return {
    type: 'AUTHENTICATION_FAILURE',
    errors: errors 
  }
