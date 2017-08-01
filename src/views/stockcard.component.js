import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPinnedStocks, deletePinnedStock, removeStock, fetchStockData } from '../redux/modules/Stock/actions';
import '../styles/spin.css';
import Panel from 'react-uikit-panel';

class StockCard extends Component {

    handleClick(e) {
        const user_id = localStorage.getItem('currentUser_id')
        const stock = this.props.stock 
        this.props.deletePinnedStock(user_id, stock.name, stock.id)
    }

    render() {
        const user_id = localStorage.getItem('currentUser_id') 
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
                {/* <button className="uk-button uk-button-default" type="submit" onClick={this.handleClick.bind(this)}>Remove</button> */}
            </Panel>)
        }
    }
}

function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser,
    stocksData: state.stock.stocksData 
  }
}

export default connect(mapStateToProps, { fetchPinnedStocks, deletePinnedStock, removeStock, fetchStockData })(StockCard); 

