import React, { Component } from 'react';
import StockForm from '../../views/components/Forms/stock';

class Dashboard extends Component {

  makeStockRequest = data => this.props.youraction(data)

  render() {
    return (
      <div className="uk-position-center">
        <StockForm onSubmit={this.props.makeStockRequest} />
        {/* stock list component */}
      </div>
    );
  }
}
  

  // have this connect to stocks array in your state

export default Dashboard;

