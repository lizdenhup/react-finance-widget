import ApiService from '../../services/ApiService';

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

export const searchPending = (stockSymbol) => {
  return {
    type: 'SEARCH_STOCK_PENDING'
  }
}

export const getStockFulfilled = (stock) => {
  return {
    type: 'GET_STOCK_FULFILLED',
    payload: stock
  }
}

export const searchSuccess = (stockResponse) => {
  return {
    type: 'SEARCH_STOCK_SUCCESS',
    payload: stockResponse 
  }
}

export const getStockRejected = () => {
  return {
    type: 'GET_STOCK_REJECTED'
  }
}

// async function calls

export function fetchStocksWithRedux() {
  const stock = 'AAPL';
  return function(dispatch) {
    return dispatch({
      type: 'GET_STOCK_PENDING',
      payload: ApiService.getStock(`${stock}`)
        .then((response) => {
          console.log(response)
          dispatch(getStockFulfilled(response))
        })
        .catch(() => {
          dispatch(getStockRejected())
        })
    });
  };
}

export function searchStock(stockSymbol) {
   return dispatch => {
     dispatch(searchPending(stockSymbol))
     return ApiService.get(`/search?query=${Object.values(stockSymbol['stockSymbol'])}`)
       .then((response) => {
        console.log(response)
        //API call is successful here but state is not getting set properly
         dispatch(searchSuccess(response))
       })
       .catch((error) => {
        dispatch(getStockRejected())
       })
   }
}

// function fetchStocksError(err){
//   return "An error has occured";
//   console.log(err)
// }

// function fetchStockFulfilled(response) {
//   return {
//     type: 'FETCH_STOCK_FULFILLED',
//     payload: response
//   };
// }
