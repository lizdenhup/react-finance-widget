const initialState = {
  isFetchingData: false,
  stocks: [],
  currentStock: {},
  error: {}
}

let id = 0; 

export default (state = initialState, action) => {
  switch(action.type) {

    case 'PENDING_STOCK_REQUEST':
      return {
        ...state,
        isFetchingData: true
      }

    case 'STOCK_REQUEST_SUCCESS':
      return {
        ...state,
        isFetchingData: false,
        currentStock: action.stockData
      }

    case 'STOCK_REQUEST_FAILURE':
      return {
        ...state,
        isFetchingData: false,
        error: action.error 
      }

    case 'PIN_STOCK':
      id++; 
      const stock = Object.assign({}, action.stock, { id: id });
      return { stocks: state.stocks.concat(stock) }

    case 'REMOVE_PINNED_STOCK':
      const stocks = state.stocks.filter(stock => stock.id !== action.id);
      return { stocks }

    default: 
      return state;
  }
}
