import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => value ? undefined : 'This field is required.'
const minValue = min => value =>
  value && value < min ? `Must be at least ${min} characters` : undefined
const minValue8 = minValue(8)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Please enter a valid email address' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="uk-form-controls">
    <label className="uk-form-label">{label}</label>
      <input className="uk-input uk-form-width-medium" {...input} placeholder={label} type={type}/><br />
      {touched && ((error && <span> {error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

// const maxLength = max => value =>
//   value && value.length > max ? `Must be ${max} characters or less` : undefined
// const maxLength20 = maxLength(20)

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
    const { handleSubmit } = this.props
    return (
      <form className="uk-form-stacked" onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="uk-margin">
            <label>Email</label>
            <div>
              <Field
                name="email"
                value={this.state.email}
                validate={[required, email]}
                onChange={this.handleChange.bind(this)}
                component={renderField}
                id="email"
                type="text"
                placeholder="Email"
              />
            </div><br />
          <label>Password</label>
            <div>
              <Field
                name="password"
                value={this.state.password}
                validate={[required, minValue8]}
                onChange={this.handleChange.bind(this)}
                component={renderField}
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
  // validate
})(UserForm);