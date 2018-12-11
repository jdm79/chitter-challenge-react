import React, { Component } from 'react'
import '../styling/post-peep.css'

class PostPeepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // this uses ES6 to access the name of input and the value from it
  // saves having to write lots of handleChanges
  handleChange(event) {
    this.setState({ body: event.target.value})
  }

  // need to work out how to let the peeps component know there is a new peep
  handleSubmit(event){
    this.handleNewPeep()
    console.log(this.state.body)
    event.preventDefault()
  }

  handleNewPeep() {

    let content = {"peep": {"user_id": this.props.userID, "body": this.state.body}}
    // The actual fetch request
      fetch('https://chitter-backend-api.herokuapp.com/peeps', {
        method: 'POST',
        headers: {
        'Authorization': `Token token=${this.props.token}`,
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
              value={this.state.body} 
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