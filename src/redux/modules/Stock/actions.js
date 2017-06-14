import ApiService from '../../services/ApiService';
import { reset } from 'redux-form';

//actions
export const getStock = () => {
  return {
    type: 'GET_STOCK'
  }
}

export const getStockPending = () => {
  return {
    type: 'GET_STOCK_PENDING'
  }
}

export const getStockFulfilled = (stock) => {
  return {
    type: 'GET_STOCK_FULFILLED',
    payload: stock 
  }
}

export const getStockRejected = () => {
  return {
    type: 'GET_STOCK_REJECTED'
  }
}

// async function calls

export function fetchStocksWithRedux() {
  const action_type = "GET_STOCK";
  const stock = 'AAPL';
    return (dispatch) => {
    dispatch({type: `${action_type}_PENDING`});
    return ApiService.get(`/search?query=${stock}`)
    .then(([response, json]) =>{
        if(response.status === 200){
        dispatch(getStockFulfilled(json))
      }
      else{
        dispatch(getStockRejected())
      }
    })
  }
}




