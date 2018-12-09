import React, { Component } from 'react'
import LoginForm from './login'
import '../styling/app.css'

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <header className="App-header">
            <h1>Chitter Frontend</h1>
          </header>
          <div className="login">
            <LoginForm />
          </div>
        </div>   
      </div>
    );
  }
}

export default App;
