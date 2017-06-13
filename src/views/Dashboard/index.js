import React, { Component } from 'react';
import { get_stock } from '../../redux/modules/Stock/actions';
import { connect } from 'react-redux';

class Dashboard extends Component {

    componentDidMount() {
       this.props.get_stock()
    }

    render() {
        return (
            <div className="uk-position-center">
                console.log(state)
                <button>Get stock updates</button>
            </div>
            )
        }
    }

export default connect(
  state => ({
    stocks: state.stocks
  })
  , { get_stock }
)(Dashboard);