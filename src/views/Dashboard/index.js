import React, { Component } from 'react';
import StockTable from '../StockTable';
import { connect } from 'react-redux';

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


