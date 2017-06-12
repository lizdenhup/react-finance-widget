import React, { Component } from 'react';
import DATA from '../../redux/modules/Stock/data';

class StockWidget extends Component {
  render() {
    return (
      <div> 
        <table class="uk-table uk-width-1-1">
            <caption>Data for {DATA['Meta Data']['2. Symbol']} as of {Object.keys(DATA['Time Series (Daily)'])[0]}</caption>
            <thead>
                <tr>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Close</th>
                    <th>Volume</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="uk-width-1-1 uk-text-right">{Object.values(DATA['Time Series (Daily)'])[0]['1. open']}</td>
                    <td class="uk-width-1-1 uk-text-right">{Object.values(DATA['Time Series (Daily)'])[0]['2. high']}</td>
                    <td class="uk-width-1-1 uk-text-right">{Object.values(DATA['Time Series (Daily)'])[0]['3. low']}</td>
                    <td class="uk-width-1-1 uk-text-right">{Object.values(DATA['Time Series (Daily)'])[0]['4. close']}</td>
                    <td class="uk-width-1-1 uk-text-right">{Object.values(DATA['Time Series (Daily)'])[0]['5. volume']}</td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

  // have this connect to stocks array in your state

export default StockWidget;
