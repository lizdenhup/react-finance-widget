import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../../redux/modules/Stock/actions';
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

export default connect(null, { search })(Search); 