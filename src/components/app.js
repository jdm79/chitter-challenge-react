import React, { Component } from 'react'
import LoginForm from './login'
import '../styling/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Chitter Frontend',
      buttonText: 'Log in' 
    }
  }

  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <header className="App-header">
            <h1>{this.state.title}</h1>
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
