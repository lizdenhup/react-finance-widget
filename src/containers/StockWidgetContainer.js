import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../redux/modules/Stock/actions'

class StockWidgetContainer extends Component {

  render() {
    return (

    )
  }
}

export default connect(null, { search })(StockWidgetContainer)