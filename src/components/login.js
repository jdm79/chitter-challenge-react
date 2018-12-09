import React, { Component } from 'react'
import '../styling/login.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: ''
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

  handleLoginClick() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn ? true : false })
  }

  // refactor this function - DRY
  // don't need the 'else' here
  // put this.state.isLoggedIn first
  // this.state.email.length === this.state.email.length > 0
  handleSubmit(event){
    if(this.state.email.length > 0 && this.state.password.length > 0) {
      this.handleLoginClick()
      event.preventDefault()
      // this.setState({ email: '', password: '' })
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
            type="email" 
            name="email" 
            value={this.state.email} 
            placeholder="Email" 
            className="email" 
            id="input" 
            onChange={this.handleChange} />
          <input 
            type="password" 
            name="password" 
            value={this.state.password} 
            placeholder="Password"
            className="password" 
            id="input" 
            onChange={this.handleChange} />
          <input 
            type="submit" 
            className="button" 
            id="input" 
            value={!this.state.isLoggedIn ? "Log in" : "Log out"} />
        </form>
        <p>Status: {!this.state.isLoggedIn ? "Logged out" : `${this.state.email} is logged in`}</p>
      </div>
    );
  }
}

export default LoginForm