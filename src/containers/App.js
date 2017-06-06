import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../redux/modules/Auth/actions';

// views
import Welcome from '../views/Welcome'
import Signup from '../views/Signup'
import Login from '../views/Login'
import Dashboard from '../views/Dashboard'
import NotFound from '../views/NotFound'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {
            this.props.isAuthenticated ?
            <nav className="uk-navbar-container navbar uk-navbar">
              <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                  <li><Link to="/dashboard">My dashboard</Link></li>
                </ul>
              </div>
              <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                  <li><Link to="/" onClick={this.handleLogout}>Log out</Link></li>
                </ul>
              </div>
            </nav>
              :
          <nav className="uk-navbar-container navbar uk-navbar">
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </div>
          </nav>
          }
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

export default connect(mapStateToProps)(App);