import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

class Navbar extends Component {
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  static contextTypes = {
    router: PropTypes.object
  }

  handleLogout() {
    this.props.logout(this.context.router)
  }

  render() {
    if (this.props.isAuthenticated) { 
      return (
        <nav className="uk-navbar-container navbar uk-navbar">
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li><NavLink to="/" >{this.props.currentUser.email}</NavLink></li> 
              <li><NavLink onClick={this.forceUpdate} to="/search">Search</NavLink></li>
              <li><NavLink to="/dashboard">My Dashboard</NavLink></li>
            </ul>
          </div> 
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li><NavLink to="/" onClick={this.handleLogout}>Log Out</NavLink></li>
            </ul>
          </div>  
        </nav> 
      )} else { 
          return (
            <nav className="uk-navbar-container navbar uk-navbar">
              <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                  <li><NavLink to="/signup">Signup</NavLink></li>
                  <li><NavLink to="/login">Login</NavLink></li>
                </ul>
              </div> 
            </nav>
          )}
  }
}

export default Navbar;



