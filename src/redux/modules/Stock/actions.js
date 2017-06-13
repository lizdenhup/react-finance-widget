import ApiService from '../../services/ApiService';
import { reset } from 'redux-form';

//actions
export const stockRequest = () => {
  return {
    type: 'STOCK_REQUEST'
  }
}

export const stockRequestSuccess = (stock) => {
  return {
    type: 'STOCK_REQUEST_SUCCESS',
    stock: stock 
  }
}

export const stockRequestFailure = () => {

}

// async function calls



