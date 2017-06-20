const initialState = {
  inProgress: false,
  stockData: {},
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
    default: 
      return state;
  }
}
