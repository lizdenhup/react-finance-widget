import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../redux/modules/Stock/actions'

class StockWidgetContainer extends Component {

  render() {
    return (
        < StockForm />
    )
  }
}

export default connect(
  state => ({
    stock: state.stocks,
    currentUser: state.auth.currentUser
  }), {
    search
  }
)(StockWidgetContainer);