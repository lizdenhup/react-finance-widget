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

// async function calls
export const search = (stockSymbol) => {
  return dispatch => {
    dispatch(stockRequest());
    return ApiService.gett(`/search?query=${stockSymbol}`)
      .then(response => {
        const { result } = response 
        dispatch(stockRequestSuccess(stockSymbol))
      })
      .catch((errors) => {
        console.log(errors)
      })
  }
}