import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPinnedStocks, deletePinnedStock, removeStock, fetchStockData, fetchedAllStocks } from '../redux/modules/Stock/actions';
import '../styles/spin.css';
import StockCard from './stockcard.component.js';
import Grid from 'react-uikit-grid'
import _ from 'lodash'

class Dashboard extends Component {
//find some way of displaying the spinner icon until the number of stock cards equals the number of stocks
//to prevent the user from seeing the cards being added as the API calls execute 

//perhaps save user id to localStorage and then delete it when the user logs out 
    componentDidMount() {
        const user_id = localStorage.getItem('currentUser_id')
        this.props.fetchPinnedStocks(user_id) 
    }

    render() { 
        const stocks = _.values(this.props.stocksData)   
        if (stocks && stocks.length > 0) {
            return (
                <Grid>
                    {Object.values(this.props.stocksData).map((stock) => {
                        return <StockCard key={stock.id} stock={stock} /> 
                    })}
                </Grid> 
            )
        } else {
            return (
            <div>
                <p>It looks like you haven't pinned any stocks to your dashboard yet. Add some stocks through the 
                    search feature to get up-to-the-minute stock data on your dashboard. Testingggg
                </p>
            </div>
            ) 
        }
    }
}


function mapStateToProps(state) {
  return {
    stocksData: state.stock.stocksData,
    currentUser: state.auth.currentUser,
    isAuthenticating: state.auth.isAuthenticating, 
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, { fetchPinnedStocks, deletePinnedStock, removeStock, fetchStockData })(Dashboard); 

