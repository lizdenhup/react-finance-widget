import React, { Component } from 'react'
import { connect } from 'react-redux';
import { search } from '../../redux/modules/Stock/actions';
import StockForm from '../components/Forms/stock';

class Search extends Component {
  submit = (values) => {
  console.log(values)
}
  
  render() {
    return (
      <div>
        <p>...</p>
        <StockForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default connect(null, { search })(Search);
