import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../redux/modules/Auth/actions';

// views
import Navbar from '../views/Navbar'
import Welcome from '../views/Welcome'
import Signup from '../views/Signup'
import Login from '../views/Login'
import Dashboard from '../views/Dashboard'
import NotFound from '../views/NotFound'

import { authenticate, authFailure } from '../redux/modules/Auth/actions'

type Props = {
  isAuthenticated: boolean,
  logout: () => void,
  authenticate: () => void,
  authFailure: () => void
}

class App extends Component {

  props: Props 

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
          <Navbar isAuthenticated={this.props.isAuthenticated} logout={this.props.logout} currentUser = {this.props.currentUser.email} />
          <Switch>
            <Route exact path="/" component={this.props.isAuthenticated ? Dashboard : Welcome} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    currentUser: state.auth.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout,
    authenticate,
    authFailure
  }, dispatch)
}

export default connect(mapStateToProps, {logout, authenticate, authFailure})(App);