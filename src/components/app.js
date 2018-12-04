import React, { Component } from 'react';
import '../styling/app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Chitter Frontend'
    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.title}</h1>
        </header>
      </div>
    );
  }
}

export default App;
