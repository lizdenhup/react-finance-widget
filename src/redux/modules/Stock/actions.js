import ApiService from '../../services/ApiService';
import { reset } from 'redux-form';

//actions
const stockRequest = () => {
  return {
    type: 'STOCK_REQUEST'
  }
}

const stockRequestSuccess = (stock) => {
  return {
    type: 'STOCK_REQUEST_SUCCESS',
    stock: stock 
  }
}

// async function calls
export const search = (stockSymbol) => {
  return dispatch => {
    dispatch(stockRequest());
    return ApiService.get(`/search?query=${stockSymbol}`)
      .then(response => {
        const { result } = response 
        dispatch(stockRequestSuccess(result))
        dispatch(reset('search'))
      })
      .catch((errors) => {
        console.log(errors)
      })
  }
}