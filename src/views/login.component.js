import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../redux/modules/Auth/actions'
import UserForm from './Forms/user';
import logo from '../logo.svg';
import '../styles/spin.css';

class Login extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  handleLogin = data => this.props.login({user: data}, this.context.router)

  render() {
    if (this.props.isAuthenticating) {
      return (
        <div className="uk-position-center">
          <img src={logo} alt="React logo" className="App-logo" />
        </div> 
    )
    } else {
      return(
        <div className="uk-position-center">
          <h2 className="uk-heading-line uk-text-center"><span>Log In:</span></h2>
          <UserForm action="login" onSubmit={this.handleLogin}/>
        </div>
      )
    }
  }
}

export default connect(
  state => ({
    isAuthenticating: state.auth.isAuthenticating
  }), {
    login
  }
)(Login);
