import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';

const store = configureStore();
import './styles/uikit.css'

<Provider store={store}>
  <App />
</Provider>,
  <App />, document.getElementById('root'));
registerServiceWorker();