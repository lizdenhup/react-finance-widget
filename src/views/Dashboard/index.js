import React, { Component } from 'react';
import { fetchStocksWithRedux } from 
'../../redux/modules/Stock/actions';
import  { connect } from 'react-redux';
import Table from 'react-uikit-table';

class Dashboard extends Component {

    componentDidMount() {
       this.props.fetchStocksWithRedux()
    }

    render() {
        // const stockObj = [Object.values(this.props.stockData)[1]][0]
        const stockObject = this.props.stockData['Time Series (Daily)']
        console.log(stockObject)
        // need to turn object into an array of objects
        return (
            <div className="uk-position-center">
            <Table caption="Today's Stock Data for AAPL" head={['Open', 'High', 'Low', 'Close', 'Volume']}/>
            </div>
            )
        }
    }

export default connect(
  state => ({
    stocks: state.stocks,
    stockData: state.stock.stockData
  })
  , { fetchStocksWithRedux }
)(Dashboard);

