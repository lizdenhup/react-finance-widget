import ApiService from '../../services/ApiService';
// import { reset } from 'redux-form';

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
    stock: stock 
  }
}

export const getStockRejected = () => {
  return {
    type: 'GET_STOCK_REJECTED'
  }
}

// async function calls

export function get_stock() {  
  const action_type = "GET_STOCK";
  const stock = 'AAPL';
  return dispatch => {
    // Dispatch the action for telling our reducer 
    // that the API call is in progress
    dispatch({type: `${action_type}_PENDING`});
<<<<<<< HEAD
    ApiService.get(`/search?query=AAPL`)
=======
    ApiService.get(`/search?query=${stock}`)
>>>>>>> 02fe32b326dbab3c7a221856135e25a3d481f57c
      .then(resp => {
        // Dispatch the success action with the payload
        dispatch({
          type: `${action_type}_FULFILLED`,
          payload: resp.data.results
        });
      })
      .catch(err => {
        // Dispatch the error action with error information
        dispatch({
          type: `${action_type}_REJECTED`,
          error: err
        });
      });
  };
}



