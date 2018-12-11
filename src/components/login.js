import React, { Component } from 'react'
import PostPeepForm from './post-peep'
import Peeps from './peeps'
import '../styling/login.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: '',
      token: ''
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // this uses ES6 to access the name of input and the value from it
  // saves having to write lots of handleChanges
  handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
  }

  // a function here that upon log in, makes an api request to get
  // the handle of the user_id (if authenticated)
  // and display message saying 'handle logged in'

  handleLoginClick() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn ? true : false })
  }

  // refactor this function - DRY
  // don't need the 'else' here
  // put this.state.isLoggedIn first
  // this.state.email.length === this.state.email.length > 0
  handleSubmit(event){
    if(this.state.userID.length > 0 && this.state.token.length > 0) {
      this.handleLoginClick()
      event.preventDefault()
    } else if(this.state.isLoggedIn){
      this.handleLoginClick()
      event.preventDefault()
    } else {
      event.preventDefault()
    }
  }

  // make a renderForm function for this form
  // so that it renders based on isLoggedIn.
  // in this case don't render the input boxes if logged in
  render() {
    return (
      <div>
        <form 
          onSubmit={this.handleSubmit} 
          className="login-form">
          <input 
            type="text" 
            name="userID" 
            value={this.state.userID} 
            placeholder="userID" 
            className="email" 
            id="input" 
            onChange={this.handleChange} />
          <input 
            type="text" 
            name="token" 
            value={this.state.token} 
            placeholder="Token"
            className="password" 
            id="input" 
            onChange={this.handleChange} />
          <input 
            type="submit" 
            className="button" 
            id="input" 
            value={!this.state.isLoggedIn ? "Log in" : "Log out"} />
        </form>
        <p>Status: {!this.state.isLoggedIn ? "Logged out" : `${this.state.userID} is logged in`}</p>
        <PostPeepForm userID={this.state.userID} token={this.state.token}/>
        <Peeps />
      </div>
    );
  }
}

export default LoginForm