import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {

    render() {
        if (this.props.stocks.length === 0) {
        return (
        <div>
            <p>You have no stocks</p>
        </div>
        )
        } else {
        return (
        <div>
            <p>You have so many stocks, here they are:</p>
            {/*{this.props.stocks}.map(stock =>
            <li>{stock}</li>)*/}
        </div>
        )
        }
    }
}

function mapStateToProps(state) {
  return {
    stocks: state.stock.stocks 
  }
}

export default connect(mapStateToProps, null)(Dashboard); 

