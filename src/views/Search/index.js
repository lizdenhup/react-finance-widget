import React, { Component } from 'react'
import { connect } from 'react-redux';
import { search } from '../../redux/modules/Stock/actions';

class Search extends Component {
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default connect(null, { search })(Search);
