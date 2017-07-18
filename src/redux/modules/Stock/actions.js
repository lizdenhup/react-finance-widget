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

export const pinStock = (stockSymbol, user_id) => {
    return {
    type: 'PIN_STOCK',
    stockSymbol: stockSymbol,
    user_id: user_id 
  }
}

export const addStock = () => {
  // const user_id = currentUser.id 
  //basically right here you want to grab the current user id,
  //and make a POST request to api/v1/users/user_id/stocks with
  //the body of the post request including the stockSymbol
  //ie, you're creating a stock nested underneath a particular user
  // return dispatch => {
  //   dispatch(pinStock(stockSymbol));
  //   return ApiService.post(`/users/${user_id}/stocks`)
  //     .then(stockData => {
  //       dispatch(searchSuccess(stockSymbol, stockData))
  //     })
  //     .catch((errors) => {
  //       dispatch(searchFailure(errors))
  //     })
  // }
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
