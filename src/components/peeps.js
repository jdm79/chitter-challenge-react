import React, { Component } from 'react'
import '../styling/peeps.css';

class Peeps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peeps: []
    }
  }

  componentDidMount() {
    const url = 'https://chitter-backend-api.herokuapp.com'
    fetch(`${url}/peeps`)
      .then(blob => blob.json())
      .then(data => this.setState({ peeps: data}))
  }

  // the source of the posts can be mocked in the tests,
  // as long as it has an array
  render() {
    if(this.state.peeps.length === 0) {
      return(
        <div className="loading">Loading...</div>
      )
      } else {
      return(
        <div className="peeps">
          <ul>
            {this.state.peeps.map(peep =>
            <li key={peep.id} className="peep">
              <p>{peep.user.handle} wrote...</p>
              <h4>{peep.body}</h4>
              <p>at {peep.created_at}</p>
            </li>
            )}          
          </ul>
        </div>
      )
    }
  }  
}

export default Peeps