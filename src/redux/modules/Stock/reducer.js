import DATA from './data';

const initialState = {
  isRequesting: false,
  stock: DATA
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
        isRequesting: false, 
        stock: action.stocks 
      }

    case 'ADD_STOCK': 
      return {
        isRequesting: false, 
        stocks: [...state.stocks, action.stock]
      }

    case 'REMOVE_STOCK': 
    const deleteIndex = state.stocks.findIndex(s => s.id === action.id)
      return {
        isRequesting: false, 
        stocks: [
        ...state.stocks.slice(0, deleteIndex),
        ...state.stocks.slice(deleteIndex + 1)
        ]
      }
    default: 
      return state;
  }
}