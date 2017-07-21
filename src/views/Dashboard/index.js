import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPinnedStocks, deletePinnedStock, removeStock } from '../../redux/modules/Stock/actions';
import logo from '../../logo.svg';
import '../../styles/spin.css';
import Panel from 'react-uikit-panel';
import Grid from 'react-uikit-grid'

class Dashboard extends Component {

    componentDidMount() {
        if (this.props.isAuthenticated) {
            const user_id = this.props.currentUser.id 
            this.props.fetchPinnedStocks(user_id) 
        }
    }

    render() {
        if (this.props.isAuthenticating) {
        return (
            <div className="uk-position-center">
                <img src={logo} alt="React logo" className="App-logo" />
            </div>
            )
        } else {
                if (this.props.stocks && this.props.stocks.length > 0) {
                    let user_id = this.props.currentUser.id 
                    
                    return (
                        <Grid>
                        {this.props.stocks.map((stock, index) => 
                        <Panel key={index} col='1-2' box title={stock.name} margin='bottom' context='primary'>
                            <button type="submit" onClick={deletePinnedStock(user_id, stock.id)}>Remove</button>
                        </Panel>)}
                        </Grid>)
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

export default connect(mapStateToProps, { fetchPinnedStocks, deletePinnedStock, removeStock })(Dashboard); 

