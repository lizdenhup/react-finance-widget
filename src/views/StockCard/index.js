import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPinnedStocks, deletePinnedStock, removeStock, fetchStockData } from '../../redux/modules/Stock/actions';
import '../../styles/spin.css';
import Panel from 'react-uikit-panel';
import Grid from 'react-uikit-grid'

class StockCard extends Component {

    componentDidMount() {
        this.props.stocks.map((stock, index) => {
        this.props.fetchStockData(stock.name)
        //I'm printing out the data to the console really quickly, not sure how to pass it to the card
        })
    }

    render() {
        const user_id = this.props.currentUser.id 
        return (
            <Grid>
            {this.props.stocks.map((stock, index) => 
            <Panel key={index} col='1-2' box title={stock.name} margin='bottom' context='primary'>
            <button type="submit" onClick={deletePinnedStock(user_id, stock.id)}>Remove</button>
            </Panel>)}
            </Grid>)
    }
}

function mapStateToProps(state) {
  return {
    stocks: state.stock.stocks.stocks,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps, { fetchPinnedStocks, deletePinnedStock, removeStock, fetchStockData })(StockCard); 

