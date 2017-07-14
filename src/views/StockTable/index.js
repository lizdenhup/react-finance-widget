import React, { Component } from 'react'
import { connect } from 'react-redux';
import Table from 'react-uikit-table';
// import Panel from 'react-uikit-panel';
// import Icons from 'react-uikit-icons';

class StockTable extends Component {

  handleClick(e) {
    console.log('you clicked!')
    // this.props.pinStock(this.props.stockSymbol)
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
      <div className="uk-position-center">
        <Table caption={`Today's Stock Data for ${ticker}`} head={['Open', 'High', 'Low', 'Close', 'Volume']} body={tableData}/>
        <button onClick={this.handleClick.bind(this)}>Pin this stock</button>
      </div> 
    )
  } 
}

function mapStateToProps(state) {
  return {
    stockSymbol: state.stock.currentStock.stockSymbol,
    stockData: state.stock.currentStock.stockData
  }
}

export default connect(mapStateToProps, null)(StockTable); 