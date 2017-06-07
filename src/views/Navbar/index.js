import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

type Props = {
  isAuthenticated: boolean,
  logout: () => void 
}

class Navbar extends Component {
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  static contextTypes = {
    router: PropTypes.object
  }

  props: Props 

  handleLogout() {
    this.props.logout(this.context.router)
  }

  render() {
    return (
      <nav className="uk-navbar-container navbar uk-navbar">
        <div className="uk-navbar-left">
          {
            this.props.isAuthenticated ?
            <ul className="uk-navbar-nav">
              <li><NavLink to="/dashboard">My dashboard</NavLink></li>
              <li><NavLink to="/" onClick={this.handleLogout}>Log Out</NavLink></li>
            </ul>

            :

            <ul className="uk-navbar-nav">
              <li><NavLink to="/signup">Signup</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </ul>
          }
        </div>
      </nav>
    )
  }
}

export default Navbar 


