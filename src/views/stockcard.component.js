import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPinnedStocks, deletePinnedStock, removeStock, fetchStockData } from '../redux/modules/Stock/actions';
import '../styles/spin.css';
import Panel from 'react-uikit-panel';

class StockCard extends Component {

    //i don't understand how to pass down a particular stock object and treat it as a 'stock prop'
    render() {
        const user_id = this.props.currentUser.id 
        const stock = this.props.stock //should be the stockObj keyed by name
        if (!stock) { 
            return null 
        } else {
        return (
            <Panel col='1-2' box title={stock.name} margin='bottom' context='primary'>
                <div>
                    Open: {stock.openingPrice}
                </div>
                <div>
                    Close: {stock.closingPrice}
                </div>
                <div>
                    Low: {stock.low}
                </div>
                <div>
                    High: {stock.high}
                </div>
                <div>
                    Trading Volume: {stock.volume}
                </div>
                <button type="submit" onClick={deletePinnedStock(user_id, stock.id)}>Remove</button>
            </Panel>)
        }
    }
}

//stock card should be a single component 
//stockCard can expect a stock to be passed it in props 
//dashboard will generate stock cards
//parent component will be connected to state (pull in stocks and then created a stock card for each stock it receives)
//this.props.name
//this.props.openingPrice 

function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser,
    stocksData: state.stock.stocksData 
  }
}

export default connect(mapStateToProps, { fetchPinnedStocks, deletePinnedStock, removeStock, fetchStockData })(StockCard); 

