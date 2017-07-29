import ApiService from '../../services/ApiService';
import Stock from '../../../Classes/stock.js';

//actions related to searching for a stock 
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

const searchSuccess = (stockSymbol, stockData) => {
  return {
    type: 'STOCK_REQUEST_SUCCESS',
    stockData: stockData,
    stockSymbol: stockSymbol
  }
}

export const searchFailure = (errors) => {
  return {
    type: 'STOCK_REQUEST_FAILURE',
    currentStock: {},
    errors: errors 
  }
}

export const clearCurrentStock = () => {
  return {
    type: 'CLEAR_CURRENT_STOCK'
  }
}
//////

//actions related to pinning a stock to the redux state/adding that stock to the Rails DB
export const pinStock = (stockSymbol) => {
    return {
    type: 'PIN_STOCK',
    stock: stockSymbol
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

// actions related to fetching the pinned stocks and getting their associated data from Alpha Vantage
export const fetchPinnedStocks = (user_id) => {
  return dispatch => {
    return ApiService.get("/users/" + user_id + "/stocks")
    .then(pinnedStocks => {
      console.log('this is what the pinnedStocks look like', pinnedStocks)      
      pinnedStocks.stocks.map((stock) => {
        dispatch(fetchStockData(stock.name, stock.id))
      })
      dispatch(gotStocks(pinnedStocks))
      //pinned stocks is an object with an array 
    }).catch((errors) => {
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

export const fetchStockData = (name, stock_id) => {
  return dispatch => {
    ApiService.get(`/search?query=${name}`)
      .then(resp => {
        console.log('response for name', name, stock_id)
        const stockDataResp = [Object.values(resp)[1]][0]
        for (var date in stockDataResp) {
          const newStock = new Stock({
            name: name, 
            openingPrice: stockDataResp[date]['1. open'],
            high: stockDataResp[date]['2. high'],
            low: stockDataResp[date]['3. low'],
            closingPrice: stockDataResp[date]['4. close'],
            volume: stockDataResp[date]['5. volume'],
            lastRefreshed: Date.now()
          })
          newStock.id = stock_id 
          dispatch ({
            type: 'GETTING_DATA',
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

export const fetchedAllStocks = () => {
  return {
    type: 'GOT_DATA'
  }
}

//actions related to getting rid of a pinned stock from the redux state/rails DB
export const deletePinnedStock = (user_id, stock_name, stock_id) => {
  return dispatch => {
    return ApiService.delete("/users/" + user_id + "/stocks/" + stock_id)
    .then(response => {
      // program never gets to this dispatch statement 
      console.log(response)
      dispatch(removeStock(stock_name, stock_id))
      console.log(response)
    }).catch((errors) => {
      console.log('-----')
        console.log(errors)
      })
  }
}

export const removeStock = (stock_name, stock_id) => {
  return {
    type: 'REMOVE_PINNED_STOCK',
    stock_name: stock_name,
    stock_id: stock_id

  }
}




