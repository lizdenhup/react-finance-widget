const initialState = {
  isRequesting: false,
  stocks: []
}

export default (state = initialState, action) => {
  switch(action.type) {

    case 'STOCK_REQUEST':
      return {
        ...state,
        isRequesting: true 
      }

    case 'STOCK_REQUEST_SUCCESS': 
      return {
        ...state, 
        stocks: action.stocks 
      }

    case 'ADD_STOCK': 
      return {
        ...state, 
        stocks: state.stocks.concat(action.stock)
      }

    case 'REMOVE_STOCK': 
    const deleteIndex = state.stocks.findIndex(s => s.id === action.id)
      return {
        stocks: [
        ...state.stocks.slice(0, deleteIndex),
        ...state.stocks.slice(deleteIndex + 1)
        ]
      }

    default: 
      return state;
  }
}