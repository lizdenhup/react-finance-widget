import React, { Component } from 'react'
import { connect } from 'react-redux';
import Table from 'react-uikit-table';
import { addStock } from '../redux/modules/Stock/actions';
import Text from 'react-uikit-text';
import Panel from 'react-uikit-panel';
// var moment = require('moment');

class StockTable extends Component {

  handleClick(e) {
    this.props.addStock(this.props.currentUser.id, {name: this.props.stockSymbol});
  }

  render() {
    const ticker = this.props.stockData['Meta Data']['2. Symbol']
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
       <div>
        <Panel box margin='bottom' col='1-1'>
        <Text bold size='large' textAlign='center' type='span'>Today's Stock Data for {ticker}</Text>
        </Panel> 
        <Table head={['Open', 'High', 'Low', 'Close', 'Volume']} body={tableData}/>
        <button className="uk-button uk-align-center uk-button-default" onClick={this.handleClick.bind(this)}>Pin this stock</button>
      </div> 
    )
  } 
}

function mapStateToProps(state) {
  return {
    stockSymbol: state.stock.currentStock.stockSymbol,
    stockData: state.stock.currentStock.stockData,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps, { addStock })(StockTable); 