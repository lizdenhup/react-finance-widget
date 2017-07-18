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
  //not sure if this is working 
  //current issue is getting status 404 error not found as of 4:27 PM
  const token = localStorage.getItem('token')
  return dispatch => {
    dispatch(pinStock(stockSymbol));
    return ApiService.post("/users/" + user_id + "/stocks", {stockSymbol, token})
      .then(response => {
        const { stock } = response
        console.log(stock)
      })
      .catch((errors) => {
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
