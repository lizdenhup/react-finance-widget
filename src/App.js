import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    color: 'white',
    background: '#18121e',
    padding: '6px',
    height: '40px'
  }
})

const Signup = () => <div>Signup</div>
const Home = () => <div>Home</div>
const NotFound = () => <div>NotFound</div>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navbar">
          
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;