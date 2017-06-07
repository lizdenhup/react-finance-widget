import ApiService from '../../services/ApiService'

//actions
const stockRequest = () => {
  return {
    type: 'STOCK_REQUEST'
  }
}

const stockRequestSuccess = () => {
  return {
    type: 'STOCK_REQUEST_SUCCESS'
    //unsure how to put stock: stock here 
  }
}

// aync function calls
// GET stock