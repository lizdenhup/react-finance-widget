import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => value ? undefined : 'This field is required.'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="uk-form-controls">
    <label className="uk-form-label">{label}</label>
      <input className="uk-input uk-form-width-medium" {...input} placeholder={label} type={type}/><br />
      {touched && ((error && <span> {error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

class StockForm extends Component {

handleSubmit = data => this.props.onSubmit(data)

  handleChange(event) {
    if (event.target.value === 'stockSymbol') {
      this.setState({
        currentStock: {
          stockSymbol: event.target.value
        }
      })
    }
  }
  
  render() {
    const { handleSubmit, submitting } = this.props
    return (
      <form className="uk-form-stacked" onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="uk-margin">
            <div>
              <Field
                name="currentStock[stockSymbol]"
                onChange={this.handleChange.bind(this)}
                validate={required}
                className="uk-input uk-form-width-medium"
                component={renderField}
                id="stockSymbol"
                type="text"
                placeholder="Ticker symbol"
              />
            </div><br />
          <input type="submit" className="uk-button uk-button-default" disabled={submitting} value="Search for this stock" />
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'stock'
})(StockForm);