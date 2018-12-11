import React, { Component } from 'react'
import '../styling/post-peep.css';

class PostPeepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peep: '',
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // this uses ES6 to access the name of input and the value from it
  // saves having to write lots of handleChanges
  handleChange(event) {
      this.setState({ peep: event.target.value})
  }
  
  handleSubmit(event){
      alert(`this is your peep: ${this.state.peep}`)
      event.preventDefault()
  }

  render() {
    return (
      <div>
        <div>
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
      </div>
    );
  }
}

export default PostPeepForm