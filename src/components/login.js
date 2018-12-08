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
    this.setState({ isLoggedIn: true })
  }

  handleSubmit(event){
    if(this.state.email.length > 0 && this.state.password.length > 0) {
      alert(`Success! Email: ${this.state.email}, password: ${this.state.password} and logged-in status: ${this.state.isLoggedIn} `)
      this.handleLoginClick()
      event.preventDefault()
      this.setState({ email: '', password: '' })
    } else {
      alert("Fields cannot be blank")
      event.preventDefault()

    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <input type="email" name="email" value={this.state.email} placeholder="Email" 
        className="email" id="input" onChange={this.handleChange} />
        <input type="password" name="password" value={this.state.password} placeholder="Password"
        className="password" id="input" onChange={this.handleChange} />
        <input type="submit" className="button" id="input" value={this.state.isLoggedIn === false ? "Log in" : "Log out"} />
        <p>Logged in status: {this.state.isLoggedIn === false ? "Logged Out" : "Logged In"}</p>
      </form>
    );
  }
}

export default LoginForm