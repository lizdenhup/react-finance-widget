import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStock } from '../../redux/modules/Stock/actions'
import StockForm from '../../views/Forms/stock';


const Dashboard = (props) => 
<div>
  <br />
  <StockForm />
</div>

export default Dashboard 

