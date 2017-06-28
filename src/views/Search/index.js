import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchStock } from '../../redux/modules/Stock/actions';
import StockForm from '../components/Forms/stock';

class Search extends Component {

  handleSearch = data => this.props.searchStock({stockSymbol: data})

  render() {
      console.log(this.props)
    return(
      <div className="uk-position-center">
        <StockForm action="searchStock" onSubmit={this.handleSearch} />
      </div>
      )
  }
}


export default connect(null, { searchStock })(Search);