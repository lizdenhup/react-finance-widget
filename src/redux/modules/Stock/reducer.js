const initialState = {
  isFetchingData: false,
  hasFetchedData: false, 
  stocks: [],
  stocksData: {},
  currentStock: {
    stockSymbol: '',
    stockData: {}
  },
  error: {}
}

let id = 0; 

export default (state = initialState, action) => {
  switch(action.type) {

    case 'UPDATE_STOCK_TICKER_INPUT': 
    return {
      ...state,
      currentStock: {
        stockSymbol: action.stockSymbol
      }
    }

    case 'PENDING_STOCK_REQUEST':
      return {
        ...state,
        isFetchingData: true
      }

    case 'STOCK_REQUEST_SUCCESS':
      return {
        ...state,
        isFetchingData: false,
        hasFetchedData: true, 
        currentStock: {
          stockSymbol: action.stockSymbol, 
          stockData: action.stockData
        }
      }

    case 'SET_CURRENT_STOCK':
    return {
      ...state,
      currentStock: {
        stockSymbol: action.stockSymbol 
      }
    }

    case 'CLEAR_CURRENT_STOCK':
    return {
      ...state,
      currentStock: {
        stockSymbol: '',
        stockData: {}
      }
    }

    case 'STOCK_REQUEST_FAILURE':
      return {
        ...state,
        isFetchingData: false,
        hasFetchedData: false, 
        error: action.error 
      }

    case 'PIN_STOCK':
      id++; 
      const stock = {stockSymbol: action.stockSymbol, id: id};
      return { 
        ...state,
        stocks: state.stocks.concat(stock) 
      }
    
    case 'GOT_STOCKS':
    return {
      ...state,
      stocks: action.stocks 
    }

    case 'GOT_DATA':
    return {
      ...state, 
      stocksData: {
        ...state.stocksData, 
        [action.stock.name]: action.stock 
      }
    }

    //David wrote this
//     return {
//   ...state,
//   stocksData: {
//     ...stocksData,
//     [action.stock.name]: {
//       ...state.stocksData[action.stock.name],
//       ...action.stock
//     }
//   }
// }
    // need to change stock sinto an object and then key it 

    //can store the stocks as an object and not an array 

    case 'REMOVE_PINNED_STOCK':
      const deleteIndex = state.stock.stocks.stocks(stock => stock.index === action.stock_id)
      return {
        stocks: [
              ...state.stock.stocks.stocks.slice(0, deleteIndex),
              ...state.stock.stocks.stocks.slice(deleteIndex + 1)
            ]
      }

    default: 
      return state;
  }
}
