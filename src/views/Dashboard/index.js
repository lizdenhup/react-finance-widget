import React, { Component } from 'react';
import { fetchStocksWithRedux } from '../../redux/modules/Stock/actions';
import { connect } from 'react-redux';

class Dashboard extends Component {

    // componentDidMount() {
    //    this.props.fetchStocksWithRedux()
    // }

    render() {
        return (
            <div className="uk-position-center">

            </div>
            )
        }
    }

export default connect(
  state => ({
    stocks: state.stocks,
    stock: state.stock
  })
  , { fetchStocksWithRedux }
)(Dashboard);