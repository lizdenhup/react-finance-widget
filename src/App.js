import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';

// views
import Navbar from './views/navbar.component.js'
import Welcome from './views/welcome.js'
import Signup from './views/signup.component.js'
import Login from './views/login.component.js'
import Dashboard from './views/dashboard.component.js'
import NotFound from './views/notfound.js'
import Search from './views/search.component.js'

import { authenticate, authFailure, logout } from './redux/modules/Auth/actions'
// import { fetchPinnedStocks } from './redux/modules/Stock/actions'

class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      this.props.authenticate()
    } else {
      this.props.authFailure()
    }
  }

  //work on what I return in here to only show what I want to show based on authentication state 
  //apps where signup and login are separate pages. if you're authenticated then your token
  //is saved in localStorage


  //do auth in app component and then let other components not worry about it 
  //just check for a user_id, if not then kick user to login page 
  //otherwise assume its there and that will remove race condition 

  render() {
    // if (!currentUser) {
    
    // }
    return (
      <Router>
        <div className="App">
          <Navbar 
            isAuthenticated={this.props.isAuthenticated} 
            logout={this.props.logout} 
            currentUser={this.props.currentUser} 
            //the navbar has access to these props because it is
            //a child of App, and App has access to all of these props
          />
          <Switch>
            <Route exact path="/" component={this.props.isAuthenticated ? Dashboard : Welcome} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

//when app loads authenticate
//save state so other components can look at it

export default connect(
  state => ({
    isAuthenticated: state.auth.isAuthenticated,
    currentUser: state.auth.currentUser,
    isFetchingData: state.stock.isFetchingData
  }), {
    logout,
    authenticate,
    authFailure
  }
)(App);


