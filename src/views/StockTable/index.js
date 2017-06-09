import React, { Component } from 'react';
import DATA from '../../redux/modules/Stock/data';

class StockWidget extends Component {
  render() {
    return (
      <div> 
        Date: {Object.keys(DATA['Time Series (Daily)'])[0]}<br />
        Symbol: {DATA['Meta Data']['2. Symbol']}<br />
        Open: {Object.values(DATA['Time Series (Daily)'])[0]['1. open']}<br />
        High: {Object.values(DATA['Time Series (Daily)'])[0]['2. high']}<br />
        Low: {Object.values(DATA['Time Series (Daily)'])[0]['3. low']}<br />
        Close: {Object.values(DATA['Time Series (Daily)'])[0]['4. close']}<br />
        Volume: {Object.values(DATA['Time Series (Daily)'])[0]['5. volume']}<br />
      </div>
    );
  }
}

  // have this connect to stocks array in your state

export default StockWidget;
