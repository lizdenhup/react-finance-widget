const initialState = {
   isAuthenticated: false,
   isAuthenticating: true,
   currentUser: null,
   errors: []
 }
 
export default (state = initialState, action) => {
 switch(action.type) {

   case 'AUTHENTICATION_REQUEST':
     return {
       ...state,
       isAuthenticating: true
     }

   case 'AUTHENTICATION_SUCCESS':
     return {
       isAuthenticated: true,
       isAuthenticating: false,
       currentUser: action.user
     }

     case 'AUTHENTICATION_FAILURE':
      return {
        isAuthenticated: false,
        isAuthenticating: false,
        currentUser: null,
        errors: action.errors
      }

      case 'LOGOUT':
        return Object.assign({}, initialState, {isAuthenticating: false})

   default:
     return state;
 }
}