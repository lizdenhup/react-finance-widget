import React, { Component } from 'react'
import { connect } from 'react-redux';
import { search, updateStockTicker } from '../../redux/modules/Stock/actions';
import logo from '../../logo.svg';
import '../../styles/spin.css';

class Search extends Component {

  handleSearch = stockSymbol => this.props.search(stockSymbol)

  onStockInputChange(event) {
    if (event.target.name === 'stockSymbol') {
      this.props.updateStockTicker(event.target.value)
    }
  }

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
    stockSymbol: state.stock.currentStock.stockSymbol,
    stockData: state.stock.currentStock.stockData
  }
}

export default connect(mapStateToProps, { search, updateStockTicker })(Search); 