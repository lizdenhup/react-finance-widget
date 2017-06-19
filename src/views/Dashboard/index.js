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
        const stockObj = [Object.values(this.props.stockData)[1]][0]
        var todaysData = []   
        for (var date in stockObj) {
            todaysData.push(`${stockObj[date]['1. open']}`);
            todaysData.push(`${stockObj[date]['2. high']}`);
            todaysData.push(`${stockObj[date]['3. low']}`);
            todaysData.push(`${stockObj[date]['4. close']}`);
            todaysData.push(`${stockObj[date]['5. volume']}`);
            break;
        }    
        const tableData = [{d1: todaysData[0], d2: todaysData[1], d3: todaysData[2], d4: todaysData[3], d5: todaysData[4]}]
        return (
            <div className="uk-position-center">
            <Table caption="Today's Stock Data for AAPL" head={['Open', 'High', 'Low', 'Close', 'Volume']} body={tableData}/>
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

