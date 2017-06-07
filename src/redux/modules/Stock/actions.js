import ApiService from '../../services/ApiService'

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

// aync function calls




// GET stock