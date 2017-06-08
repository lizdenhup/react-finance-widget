import React, { Component } from 'react';
import DATA from '../../redux/modules/Stock/data'
class StockWidget extends Component {
  render() {
    return (
      <div> 
        <p>Here is some data. Hooray</p>
        `${DATA[0]["Meta Data"]}`
      
      </div>
    );
  }
}
  //apparently objects cannot be react children
  // have this connect to stocks array in your state

export default StockWidget;
