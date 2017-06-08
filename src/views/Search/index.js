import React, { Component } from 'react';
import StockForm from '../../views/components/Forms/stock';

class Search extends Component {

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

export default Search; 