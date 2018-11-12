import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" components={Landing} />
          <div className="container">
            <Route exact path="/register" components={Register} />
            <Route exact path="/login" components={Login} />
            <Route exact path="/profile" components={Profile} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
