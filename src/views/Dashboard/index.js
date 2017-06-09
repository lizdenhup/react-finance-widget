import React, { Component } from 'react';
import StockTable from '../StockTable';

class Dashboard extends Component {
  render() {
    return (
      <div> 
        <StockTable /> 
      </div>
    );
  }
}
  
  // have this connect to stocks array in your state

export default Dashboard;

