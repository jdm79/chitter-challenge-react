import React, { Component } from 'react'
import '../styling/post-peep.css';

class PostPeepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      url: 'https://chitter-backend-api.herokuapp.com/peeps/'
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // this uses ES6 to access the name of input and the value from it
  // saves having to write lots of handleChanges
  handleChange(event) {
    this.setState({ peep: event.target.value})
  }

  handleCheckNewPeeps() {
    fetch(this.state.url)
  }
  

  // lifting state up is required here to pass these new peeps as props to the peeps.js component
  handleSubmit(event){
    this.handleNewPeep()
    console.log(this.state.peep)
    // event.preventDefault()
  }

  handleNewPeep() {

    let content = {"peep": {"user_id":665, "body":this.state.peep}};
    // The actual fetch request
      fetch(this.state.url, {
        method: 'POST',
        headers: {
        'Authorization': 'Token token=_2a_10_dpxezbQVCyQeSr1fMOKfyO',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
      })
    } 

  render() {
    return (
        <div className="container">
          <form 
            onSubmit={this.handleSubmit} 
            className="post-peep-form">
            <input 
              type="text" 
              name="postPeep" 
              value={this.state.peep} 
              placeholder="Post your peep here..." 
              className="post-peep" 
              id="input" 
              onChange={this.handleChange} 
              />
            <input 
              type="submit" 
              className="button" 
              id="input" 
              value="Post" 
              />
          </form>
        </div>
    );
  }
}

export default PostPeepForm