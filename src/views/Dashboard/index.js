import React, { Component } from 'react';
import { get_stock } from '../../redux/modules/Stock/actions';
import { connect } from 'react-redux';

class Dashboard extends Component {

    // componentDidMount() {
    //     dispatch(get_stock())
    // }

    render() {
        return (
            <div className="uk-position-center">

            </div>
            )
        }
    }

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks
  }
}

const mapDispatchToProps = dispatch => {
    return {
        getStock: () => dispatch({
            type: 'GET_STOCK'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);