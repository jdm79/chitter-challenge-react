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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // this uses ES6 to access the name of input and the value from it
  // saves having to write lots of handleChanges
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event){
    alert('You may now log in with this email: ' + this.state.email + '. Logged in status: ' + this.state.isLoggedIn);
    event.preventDefault();
    this.setState({ email: '', password: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <label className="label">
          Email: 
          <input type="email" name="email" value={this.state.email} className="email" onChange={this.handleChange} />
        </label>
        <label className="label">
          Password: 
          <input type="password" name="password" value={this.state.password} className="password" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Log in" />
      </form>
    );
  }
}

export default LoginForm