const initialState = {
  inProgress: false,
  stockData: {},
  stockSymbol: "",
  stockResponse: {},
  error: {}
}

export default (state = initialState, action) => {
  switch(action.type) {

    case 'GET_STOCK_PENDING': 
      return {
        ...state, 
        inProgress: true,
        error: false
      }

    case 'GET_STOCK_FULFILLED': 
      return {
        ...state,
        stockData: action.payload,
        inProgress: false
      }

    case 'GET_STOCK_REJECTED': 
      return {
        ...state,
        inProgress: false,
        error: action.error
      }

    case 'SEARCH_STOCK_PENDING':
      return {
        ...state, 
        inProgress: true, 
        error: false
      }

    case 'SEARCH_STOCK_SUCCESS':
      return {
        ...state,
        stockReponse: action.payload,
        inProgress: false 
      }
      
    default: 
      return state;
  }
}
