import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

// front-end validations for form submitted data, not perfect 
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'A valid email is required';
  } 
  if (!values.password) {
    errors.password = 'A password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }
  return errors;
}

//updated syntax to use es6 class
class UserForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = data => this.props.onSubmit(data)

  handleChange(event) {
    if (event.target.name === 'email') {
      this.setState({
        email: event.target.value
      })
    } else if (event.target.name === 'password') {
      this.setState({
        password: event.target.value
      })
    }
  }
  
  render() {
    const {handleSubmit} = this.props
    return (
      <form className="uk-form-stacked" onSubmit={handleSubmit(this.handleSubmit)}>

        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="email">Email</label>
            <div className="uk-form-controls">
              <Field
                name="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                className="uk-input uk-form-width-medium"
                component="input"
                id="email"
                type="text"
                placeholder="Email"
              />
            </div><br />
          <label className="uk-form-label" htmlFor="password">Password</label>
            <div className="uk-form-controls">
              <Field
                name="password"
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
                className="uk-input uk-form-width-medium"
                component="input"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div><br />
          <input type="submit" className="uk-button uk-button-default" value={this.props.action === "signup" ? "Create User" : "Log In"} />
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'user',
  validate
})(UserForm);