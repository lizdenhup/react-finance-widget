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
  const stockSymbol = 'AAPL';
  return (dispatch) => {
    dispatch({type: 'GET_STOCK_PENDING'});
    return ApiService.get(`/search?query=${stockSymbol}`)
    .then((response) =>{
      const stockData = response
      dispatch(getStockFulfilled(stockData))
    })
  }
}


// export function fetchStocksWithRedux() {
//   console.log('called!');
//   const stock = 'AMZN';
//   return function(dispatch) {
//     return dispatch({
//       type: 'GET_STOCK_PENDING',
//       payload: ApiService.get(`/search?query=${stock}`)
//         .then((response) => {
//           dispatch(fetchStockFulfilled(response))
//         })
//         .catch((err) => {
//           dispatch(fetchStocksError(err))
//         })
//     });
//   };
// }

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
