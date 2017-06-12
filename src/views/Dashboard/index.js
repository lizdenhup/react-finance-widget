import React, { Component } from 'react';
import StockTable from '../StockTable';
import { connect } from 'react-redux';
import { stockRequest, stockRequestSuccess, search } from '../../redux/modules/Stock/actions'

class Dashboard extends Component {

componentDidMount() {

}

  render() {
    return (
      <div> 
        <StockTable /> 
      </div>
    );
  }
}

export default connect(
  state => ({
    stocks: state.stock.stocks,
  }), {
    stockRequest,
    stockRequestSuccess,
    search 
  }
)(Dashboard);

