import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StockForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stockSymbol: ""
    }
  }

  handleSubmit = data => this.props.onSubmit(data)

  handleChange(event) {
    if (event.target.value === 'stockSymbol') {
      this.setState({
        stockSymbol: event.target.value
      })
    }
  }
  
  render() {
    const {handleSubmit} = this.props
    return (
      <form className="uk-form-stacked" onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="uk-margin">
            <div className="uk-form-controls">
              <Field
                name="stockSymbol"
                value={this.state.stockSymbol}
                onChange={this.handleChange.bind(this)}
                className="uk-input uk-form-width-medium"
                component="input"
                id="stockSymbol"
                type="text"
                placeholder="Ticker symbol"
              />
            </div><br />
          <input type="submit" className="uk-button uk-button-default" value="Search for this stock" />
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { stockSymbol: state.stockSymbol }
}


export default reduxForm({
  form: 'stock',
})(StockForm);
