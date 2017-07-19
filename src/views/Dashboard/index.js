import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPinnedStocks } from '../../redux/modules/Stock/actions';

class Dashboard extends Component {

    componentDidMount() {
    // fetch the stocks via API call
    // set the stocks array to chomp the API payload
    // if there are more than 0 stocks return them and display them
    const user_id = this.props.currentUser.id 
    this.props.fetchPinnedStocks(user_id)
    }

    render() {
        return (
        <div>
            <p>You have no stocks</p>
        </div>
        ) 
    }
}

function mapStateToProps(state) {
  return {
    stocks: state.stock.stocks,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps, { fetchPinnedStocks })(Dashboard); 

