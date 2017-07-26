import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPinnedStocks, deletePinnedStock, removeStock, fetchStockData } from '../redux/modules/Stock/actions';
import '../styles/spin.css';
import StockCard from './stockcard.component.js';
import Grid from 'react-uikit-grid'
import _ from 'lodash'

class Dashboard extends Component {
//create a stock card for each stock it fetches

    componentDidMount() {
        if (this.props.isAuthenticated) {
            const user_id = this.props.currentUser.id 
            this.props.fetchPinnedStocks(user_id) 
        }
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
                <p>You have no stocks</p>
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

