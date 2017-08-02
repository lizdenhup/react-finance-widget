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

    case 'GETTING_DATA':
    return {
      ...state, 
      isFetchingData: true,
      stocksData: {
        ...state.stocksData, 
        [action.stock.name]: action.stock 
      }
    }

    case 'GOT_DATA':
    return {
      ...state,
      isFetchingData: false, 
      hasFetchedData: true, 
      stocksData: {
        ...state.stocksData
      }
    }

    case 'REMOVE_PINNED_STOCK':
      // const copy = JSON.parse(JSON.stringify(...state.stock.stocksData))
      // console.log('should be the copy of stocksData')
      return {
        ...state, 
        stocksData: {
          ...state.stocksData
          //so, filter the stocks then return the filtered set
        }
      }

    default: 
      return state;
  }
}
