import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStock } from '../../redux/modules/Stock/actions'
import StockForm from '../../views/components/Forms/stock';


const Dashboard = (props) => 

<div className="uk-position-center">
  <StockForm />
</div>

export default Dashboard 

