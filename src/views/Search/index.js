import React, { Component } from 'react'
import { connect } from 'react-redux';
import { search, updateStockTicker } from '../../redux/modules/Stock/actions';
import logo from '../../logo.svg';
import '../../styles/spin.css';

class Search extends Component {

  handleSearch = stockSymbol => this.props.search(stockSymbol)
  //the stock ticker input was bound to the stockSymbol state in the redux store 
  onStockInputChange(event) {
    if (event.target.name === 'stockSymbol') {
      this.props.updateStockTicker(event.target.value)
    }
  }
  //this submit handler prevents a browser refresh and searches the stockSymbol that was mapped from state to props
  handleSubmit(e) {
    e.preventDefault();
    this.props.search(this.props.stockSymbol)
  }

  render() {
    // if this.props.stockSymbol !== "" && Object.keys(this.props.stockData) !== 0
    // render result
    // else, render search form
    if (this.props.isFetchingData) {
      return (
        <div className="uk-position-center">
          <img src={logo} alt="React logo" className="App-logo" />
        </div>
      )
    } else if (this.props.hasFetchedData) {
      const ticker = this.props.stockData['Meta Data']['2. Symbol']
      const stockObj = [Object.values(this.props.stockData)[1]][0]
      var todaysData = []   
        for (var date in stockObj) {
            todaysData.push(`${stockObj[date]['1. open']}`);
            todaysData.push(`${stockObj[date]['2. high']}`);
            todaysData.push(`${stockObj[date]['3. low']}`);
            todaysData.push(`${stockObj[date]['4. close']}`);
            todaysData.push(`${stockObj[date]['5. volume']}`);
            break;
        }   
      //simply need to add these values to a table 
      console.log(todaysData)
      return (
      <div>
      {ticker}
      </div> 
      )
    } else {
      return (
        <div className="uk-position-center">
          <form onSubmit={this.handleSubmit.bind(this)}>
          <input 
            type="text"
            name="stockSymbol"
            label="Stock Symbol"
            onChange={(e) => this.onStockInputChange(e)}
            />
            <button type="submit">Submit</button>
        </form>
        </div> 
      )
    } 
  }
}

function mapStateToProps(state) {
  return {
    isFetchingData: state.stock.isFetchingData,
    hasFetchedData: state.stock.hasFetchedData,
    stockSymbol: state.stock.currentStock.stockSymbol,
    stockData: state.stock.currentStock.stockData
  }
}

export default connect(mapStateToProps, { search, updateStockTicker })(Search); 