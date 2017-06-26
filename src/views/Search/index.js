import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getStock } from '../../redux/modules/Stock/actions';
import StockForm from '../components/Forms/stock';

class Search extends Component {

//   handleSearch = data => this.props.getStock({stockSymbol: data})

  render() {
    return(
      <div className="uk-position-center">
        <StockForm action="search" onSubmit={this.handleSearch} />
      </div>
      )
  }
}


export default connect(null, { getStock })(Search)