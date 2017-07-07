import ApiService from '../../services/ApiService';
import { reset } from 'redux-form'
/* 
Actions to include:
search stock
pin stock
remove pinned stock
get current stock info (for a given stock card)
*/

const searchRequest = () => {
  return {
    type: 'PENDING_STOCK_REQUEST',
  }
}

const searchSuccess = (stock) => {
  return {
    type: 'STOCK_REQUEST_SUCCESS',
    stock: stock 
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
      .then(response => {
        const { stockData } = response;
        dispatch(searchSuccess(stockData))
        dispatch(reset('search'));
      })
      .catch((errors) => {
        console.log(errors)
        dispatch(searchFailure(errors))
      })
  }
}