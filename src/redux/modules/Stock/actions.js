import ApiService from '../../services/ApiService';
// import { reset } from 'redux-form'
/* 
Actions to include:
search stock
pin stock
remove pinned stock
get current stock info (for a given stock card)
*/

export function updateStockTicker(stockSymbol) {
  return {
    type: 'UPDATE_STOCK_TICKER_INPUT',
    stockSymbol 
  }
}

const searchRequest = () => {
  return {
    type: 'PENDING_STOCK_REQUEST',
  }
}

// const searchResponse = (stockSymbol, stockData) => {
//   return {
//     type: 'STOCK_RESPONSE',
//     stockData: stockData,
//     stockSymbol: stockSymbol 
//   }
// }

const searchSuccess = (stockSymbol, stockData) => {
  return {
    type: 'STOCK_REQUEST_SUCCESS',
    stockData: stockData,
    stockSymbol: stockSymbol
  }
}

export const pinStock = (stockSymbol) => {
    return {
    type: 'PIN_STOCK',
    stock: stockSymbol
  }
}

export const addStock = (user_id, stockSymbol) => {
  // const token = localStorage.getItem('token')
  return dispatch => {
    dispatch(pinStock(stockSymbol));
    // console.log('here is stockSymbol')
    // console.log(stockSymbol)
    return ApiService.post("/users/" + user_id + "/stocks", {stock: {...stockSymbol}})
      .then(response => {
        // debugger 
        const { stock } = response
        console.log(stock)
      })
      .catch((errors) => {
        console.log(errors)
      })
  }
}

export const gotStocks = (stocks) => {
  return {
    type: 'GOT_STOCKS',
    stocks: stocks 
  }
}

export const fetchPinnedStocks = (user_id) => {
  return dispatch => {
    return ApiService.get("/users/" + user_id + "/stocks")
    .then(pinnedStocks => {
      debugger 
      console.log(pinnedStocks)
    }).catch((errors) => {
      console.log(errors)
    })
  }
}

export const removePinnedStock = (id) => {
  return {
    type: 'REMOVE_PINNED_STOCK',
    stock_id: id
  }
}

export const searchFailure = (errors) => {
  return {
    type: 'STOCK_REQUEST_FAILURE',
    currentStock: {},
    errors: errors 
  }
}

export const search = (stockSymbol) => {
  return dispatch => {
    dispatch(searchRequest());
    return ApiService.get(`/search?query=${stockSymbol}`)
      .then(stockData => {
        dispatch(searchSuccess(stockSymbol, stockData))
      })
      .catch((errors) => {
        dispatch(searchFailure(errors))
      })
  }
}
