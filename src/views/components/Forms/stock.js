import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="uk-form-controls">
    <label className="uk-form-label">{label}</label>
      <input className="uk-input uk-form-width-medium" {...input} placeholder={label} type={type}/><br />
      {touched && ((error && <span> {error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

class StockForm extends Component {
constructor(props) {
    super(props)

    this.state = {
        currentStock: {
          stockSymbol: ""
        }
    }
  }

handleChange(event) {
    if (event.target.name === 'currentStock[stockSymbol]') {
      this.setState({
        currentStock: {
            stockSymbol: event.target.value 
        }
      })
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Stock Symbol</label>
          <Field name="currentStock[stockSymbol]" 
          component={renderField}
          value={this.state.currentStock.stockSymbol}
          onChange={this.handleChange.bind(this)} type="text"/>
        <button type="submit">Submit</button>
        {this.state.currentStock.stockSymbol}
        </div>        
      </form>
    );
  }
}

StockForm = reduxForm({
  form: 'stock' // a unique name for this form
})(StockForm);

export default StockForm;