import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPinnedStocks, deletePinnedStock, removeStock, fetchStockData } from '../../redux/modules/Stock/actions';
import logo from '../../logo.svg';
import '../../styles/spin.css';
import Panel from 'react-uikit-panel';
import Grid from 'react-uikit-grid'

class StockCard extends Component {

    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.fetchStockData(stock)
        }
    }

    render() {
        if (this.props.isAuthenticating) {
        return (
            <div className="uk-position-center">
                <img src={logo} alt="React logo" className="App-logo" />
            </div>
            )
        } else {
                if (this.props.stocks && this.props.stocks.length > 0) {
                    let user_id = this.props.currentUser.id 
                    
                    return (
                        <div>
                        </div> 
                    ) 
                }
        }
    }
}

function mapStateToProps(state) {
  return {
    stocks: state.stock.stocks.stocks,
    currentUser: state.auth.currentUser,
    isAuthenticating: state.auth.isAuthenticating, 
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, { fetchPinnedStocks, deletePinnedStock, removeStock, fetchStockData })(StockCard); 

