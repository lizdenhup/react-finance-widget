import React, { Component } from 'react';
import Table from 'react-uikit-table';
import sampleData from '../../redux/modules/Stock/data';

class StockTable extends Component {
  render() {
    return (
      <div> 

        <Table caption='Generated table.' head={['Open', 'High', 'Low', 'Close', 'Volume']} body={sampleData}/>
      </div>
    );
  }
}

export default StockTable;
