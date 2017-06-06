import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'


const Home = () => <div>Home</div>
const NotFound = () => <div>Not Found</div>

const Signup = () =>
<div className="uk-position-center">
  <h2 class="uk-heading-line uk-text-center"><span>Create an account</span></h2>
  <form className="uk-form-stacked">
    <div className="uk-margin">
        <label className="uk-form-label" for="email">Email</label>
        <div className="uk-form-controls">
            <input className="uk-input uk-form-width-medium" id="email" type="text" placeholder="Email" />
        </div><br />
        <label className="uk-form-label" for="password">Password</label>
        <div className="uk-form-controls">
            <input className="uk-input uk-form-width-medium" id="password" type="password" placeholder="Password" />
        </div><br />
        <input type="submit" className="uk-button uk-button-default" value="Create User" />
    </div>
  </form>
</div>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="uk-navbar-container navbar uk-navbar">
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Signup</Link></li>
              </ul>
            </div>
          </nav>
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