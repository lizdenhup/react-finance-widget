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
import Navbar from '../views/Navbar'
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
          <Navbar isAuthenticated={this.props.isAuthenticated} logout={logout}/>
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