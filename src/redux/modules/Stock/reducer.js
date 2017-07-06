const initialState = {
  inProgress: false,
  stocks: []
}

export default (state = initialState, action) => {
  switch(action.type) {

    case 'ADD_STOCK':
    return {
      stocks: state.stocks.concat(action.stock)
    }

    default: 
      return state;
  }
}
