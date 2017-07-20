import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPinnedStocks, removePinnedStock } from '../../redux/modules/Stock/actions';
import logo from '../../logo.svg';
import '../../styles/spin.css';

class Dashboard extends Component {

    componentDidMount() {
        if (this.props.isAuthenticated) {
            const user_id = this.props.currentUser.id 
            this.props.fetchPinnedStocks(user_id) 
        }
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.removePinnedStock(stock.id)
    // }

    render() {
        //as a first step I am simply printing the names of the fetched stocks to the dashboard before rendering them each on their own card with
        //associated table data. still need to fix race condition bt post auth/refresh
        //and get stocks 
        if (this.props.isAuthenticating) {
        return (
            <div className="uk-position-center">
                <img src={logo} alt="React logo" className="App-logo" />
            </div>
            )
        } else {
                if (this.props.stocks && this.props.stocks.length > 0) {
                    return(
                        <div>
                        {this.props.stocks.map(stock => 
                        <div key={stock.id}>
                            {stock.name}<br />
                            <button type="submit" onSubmit={this.handleSubmit}>Remove</button> 
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
}

function mapStateToProps(state) {
  return {
    stocks: state.stock.stocks.stocks,
    currentUser: state.auth.currentUser,
    isAuthenticating: state.auth.isAuthenticating, 
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, { fetchPinnedStocks, removePinnedStock })(Dashboard); 

