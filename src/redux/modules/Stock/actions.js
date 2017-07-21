import ApiService from '../../services/ApiService';

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
      dispatch(gotStocks(pinnedStocks))
      console.log(pinnedStocks)
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
  return dispatch => {
    return ApiService.get(`/search?query=${name}`)
    .then(resp => {
    const stockDataResp = [Object.values(resp)[1]][0]
    var todaysData = []   
    for (var date in stockDataResp) {
        todaysData.push(`${stockDataResp[date]['1. open']}`);
        todaysData.push(`${stockDataResp[date]['2. high']}`);
        todaysData.push(`${stockDataResp[date]['3. low']}`);
        todaysData.push(`${stockDataResp[date]['4. close']}`);
        todaysData.push(`${stockDataResp[date]['5. volume']}`);
        break;
    }   
      console.log(todaysData)
    }).catch((err) =>
    console.log(err) 
    )
  }
}
