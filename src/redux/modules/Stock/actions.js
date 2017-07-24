import ApiService from '../../services/ApiService';
import Stock from '../../../Classes/stock.js';

export function updateStockTicker(stockSymbol) {
  return {
    type: 'UPDATE_STOCK_TICKER_INPUT',
    stockSymbol 
  }
}

const searchRequest = () => {
  return {
    type: 'PENDING_STOCK_REQUEST',
  }
}

const searchSuccess = (stockSymbol, stockData) => {
  return {
    type: 'STOCK_REQUEST_SUCCESS',
    stockData: stockData,
    stockSymbol: stockSymbol
  }
}

export const pinStock = (stockSymbol) => {
    return {
    type: 'PIN_STOCK',
    stock: stockSymbol
  }
}

export const clearCurrentStock = () => {
  return {
    type: 'CLEAR_CURRENT_STOCK'
  }
}

export const addStock = (user_id, stockSymbol) => {
  return dispatch => {
    dispatch(pinStock(stockSymbol));
    return ApiService.post("/users/" + user_id + "/stocks", {stock: {...stockSymbol}})
      .then(stock => {
        console.log(stock)
        // dispatch(clearCurrentStock())
      })
      .catch((errors) => {
        console.log(errors)
      })
  }
}

export const gotStocks = (stocks) => {
  return {
    type: 'GOT_STOCKS',
    stocks: stocks 
  }
}

export const removeStock = (stock_id) => {
  return {
    type: 'REMOVE_PINNED_STOCK',
    stock_id: stock_id 
  }
}

export const fetchPinnedStocks = (user_id) => {
  return dispatch => {
    return ApiService.get("/users/" + user_id + "/stocks")
    .then(pinnedStocks => {
      pinnedStocks.stocks.map((stock, index) => {
        dispatch(fetchStockData(stock.name))
      })
      dispatch(gotStocks(pinnedStocks))
      //pinned stocks is an object with an array 
      //fixed nesting 

      //here's where you want to grab the stock data 
      //repeated API calls will make repeated rerenders 
      //will be perforamnce issues because AV API does not allow batch requests

    }).catch((errors) => {
      console.log(errors)
    })
  }
}

export const deletePinnedStock = (user_id, stock_id) => {
  return dispatch => {
    return ApiService.delete("/users/" + user_id + "/stocks/" + stock_id)
    .then(response => {
      // program never gets to this dispatch statement 
      dispatch(removeStock(stock_id))
      console.log(response)
    }).catch((errors) => {
        console.log(errors)
      })
  }
}

export const searchFailure = (errors) => {
  return {
    type: 'STOCK_REQUEST_FAILURE',
    currentStock: {},
    errors: errors 
  }
}

//before getting to the reducer or to the component want to convert the data 
//into stock class

export const search = (stockSymbol) => {
  return dispatch => {
    dispatch(searchRequest());
    return ApiService.get(`/search?query=${stockSymbol}`)
      .then(stockData => {
        dispatch(searchSuccess(stockSymbol, stockData))
      })
      .catch((errors) => {
        dispatch(searchFailure(errors))
      })
  }
}

export const fetchStockData = (name) => {
  // need to dispatch an action to tie this function to reducer
  //then tie to components 
  console.log(name)
  return dispatch => {
    ApiService.get(`/search?query=${name}`)
      .then(resp => {
        console.log('response for name', name)
        const stockDataResp = [Object.values(resp)[1]][0]
        for (var date in stockDataResp) {
          const newStock = new Stock({
            openingPrice: stockDataResp[date]['1. open'],
            high: stockDataResp[date]['2. high'],
            low: stockDataResp[date]['3. low'],
            close: stockDataResp[date]['4. close'],
            volume: stockDataResp[date]['5. volume']
          })
          dispatch ({
            type: 'GOT_DATA',
            stock: newStock 
          })
          break; 
        }   
        //returning a new instance of Stock class that needs to be passed to stockcard 
      }).catch((err) =>
        console.log(err) 
      )
  }
}
