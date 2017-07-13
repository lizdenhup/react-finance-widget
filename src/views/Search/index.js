import React, { Component } from 'react'
import { connect } from 'react-redux';
import { search, updateStockTicker } from '../../redux/modules/Stock/actions';
// import StockForm from '../components/Forms/stock';

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
    return(
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
        <div>
        {this.props.stockSymbol}
        {/*{this.props.stockData}*/}
        </div>
      </div>
      )
  }
}

function mapStateToProps(state) {
  console.log(state.stock.currentStock.stockData)
  return {
    stockSymbol: state.stock.currentStock.stockSymbol,
    stockData: state.stock.currentStock.stockData
  }
}

export default connect(mapStateToProps, { search, updateStockTicker })(Search); 