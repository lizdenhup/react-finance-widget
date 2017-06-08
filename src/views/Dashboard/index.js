import React, { Component } from 'react';
import StockWidget from '../StockWidget';

class Dashboard extends Component {
  render() {
    return (
      <div> 
        <StockWidget /> 
        {/* put StockWidget component here */}
      </div>
    );
  }
}
  
  // have this connect to stocks array in your state

export default Dashboard;

