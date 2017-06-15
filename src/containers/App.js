// @flow
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../redux/modules/Auth/actions';

// views
import Navbar from '../views/Navbar'
import Welcome from '../views/Welcome'
import Signup from '../views/Signup'
import Login from '../views/Login'
import Dashboard from '../views/Dashboard'
import NotFound from '../views/NotFound'
import Search from '../views/Search'

import { authenticate, authFailure } from '../redux/modules/Auth/actions'
import { fetchStocksWithRedux } from '../redux/modules/Stock/actions'

class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      this.props.authenticate()
    } else {
      this.props.authFailure()
    }
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar 
            isAuthenticated={this.props.isAuthenticated} 
            logout={this.props.logout} 
            currentUser={this.props.currentUser} 
          />
          <Switch>
            <Route exact path="/" component={this.props.isAuthenticated ? Dashboard : Welcome} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/search" component={Search} />*/}
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({
    isAuthenticated: state.auth.isAuthenticated,
    currentUser: state.auth.currentUser,
    stocks: state.stock.stocks
  }), {
    logout,
    authenticate,
    authFailure,
    fetchStocksWithRedux
  }
)(App);


