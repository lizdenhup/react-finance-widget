import React, { Component } from 'react';
import { get_stock } from '../../redux/modules/Stock/actions';
import { connect } from 'react-redux';

class Dashboard extends Component {

  render() {
      return(
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

export default connect(mapStateToProps, { get_stock })(Dashboard);