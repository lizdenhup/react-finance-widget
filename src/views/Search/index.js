import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../../redux/modules/Stock/actions';
import StockForm from '../components/Forms/stock';

class Search extends Component {

  makeStockRequest = data => this.props.search({stockSymbol: data})

  render() {
    return (
      <div className="uk-position-center">
        <StockForm action="search" onSubmit={this.makeStockRequest} />
      <p>Here is the result:</p>

      </div>
    );
  }
}

export default connect(null, { search })(Search); 