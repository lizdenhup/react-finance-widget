const initialState = {
  inProgress: false,
  stock: {},
  stocks: ['NKE', 'AMZN', 'AAPL'],
  error: null 
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
        stock: action.payload,
        inProgress: false
      }

    case 'GET_STOCK_REJECTED': 
      return {
        ...state,
        inProgress: false,
        error: action.error
      }
    default: 
      return state;
  }
}
