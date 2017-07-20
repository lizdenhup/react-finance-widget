import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPinnedStocks } from '../../redux/modules/Stock/actions';

class Dashboard extends Component {

    componentDidMount() {
    //you can't fetch the stocks until after you ensure the auth/refresh has fired
    //otherwise no user_id will have been set. not sure how to handle this.
    //componentWillReceiveProps perhaps?
    if (this.props.isAuthenticated) {
        const user_id = this.props.currentUser.id 
        this.props.fetchPinnedStocks(user_id)
        }
    }

    render() {
        console.log('this is this.props.stocks')
        console.log(this.props.stocks)
        //as a first step I am simply printing the names of the fetched stocks to the dashboard before rendering them each on their own card with
        //associated table data. still need to fix race condition bt post auth/refresh
        //and get stocks 
        if (this.props.stocks && this.props.stocks.length > 0) {
                return(
                    <div>
                    {this.props.stocks.map(stock => 
                    <div key={stock.id}>
                        {stock.name}<br />
                    </div>)}
                    </div>
                )
        } else {
            return (
            <div>
                <p>You have no stocks</p>
            </div>
            ) 
        }
    }
}

function mapStateToProps(state) {
  return {
    stocks: state.stock.stocks.stocks,
    currentUser: state.auth.currentUser,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, { fetchPinnedStocks })(Dashboard); 

