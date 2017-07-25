import React, { Component } from 'react'
import { connect } from 'react-redux';
import { search, updateStockTicker } from '../redux/modules/Stock/actions';
import logo from '../logo.svg';
import '../styles/spin.css';
import StockTable from './stocktable.component.js'

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
    if (this.props.isFetchingData) {
      return (
        <div className="uk-position-center">
          <img src={logo} alt="React logo" className="App-logo" />
        </div>
      )
    } else if (this.props.hasFetchedData) {
      return (
      <div className="uk-position-center">
      <StockTable /> 
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
// need to pass state to props for any component from redux store

function mapStateToProps(state) {
  return {
    isFetchingData: state.stock.isFetchingData,
    hasFetchedData: state.stock.hasFetchedData,
    stockSymbol: state.stock.currentStock.stockSymbol,
    stockData: state.stock.currentStock.stockData
  }
}

export default connect(mapStateToProps, { search, updateStockTicker })(Search); 