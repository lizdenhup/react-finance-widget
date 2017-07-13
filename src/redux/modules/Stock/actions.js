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
        // const { stockData } = response
        //why is stockData undefined if the response is not undefined? => there is no stockData properly in the response. take away the brackets. or change response to stockData
        dispatch(searchSuccess(stockSymbol, stockData))
        // dispatch(reset('search'));
      })
      .catch((errors) => {
        console.log(errors)
        // dispatch(showFailure())
        dispatch(searchFailure(errors))
      })
  }
}
