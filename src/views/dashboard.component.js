import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPinnedStocks, deletePinnedStock, removeStock, fetchStockData } from '../redux/modules/Stock/actions';
import logo from '../logo.svg';
import '../styles/spin.css';
import StockCard from './stockcard.component.js';

class Dashboard extends Component {
//create a stock card for each stock it fetches

    componentDidMount() {
        if (this.props.isAuthenticated) {
            const user_id = this.props.currentUser.id 
            this.props.fetchPinnedStocks(user_id) 
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
            console.log('this should be the stocks arr')
            console.log(this.props.stocks)
                if (this.props.stocks && this.props.stocks.length > 0) {
                    return (
                        <div>
                            {this.props.stocks.map((stock, index) => {
                                return <StockCard key={index} stock={stock} /> 
                            })}
                        </div> 
                    )
                } else {
                    return (
                    <div>
                        <p>You have no stocks</p>
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

export default connect(mapStateToProps, { fetchPinnedStocks, deletePinnedStock, removeStock, fetchStockData })(Dashboard); 

