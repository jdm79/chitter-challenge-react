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
    this.setState({ isLoggedIn: this.state.isLoggedIn === false ? true : false })
  }

  handleSubmit(event){
    if(this.state.email.length > 0 && this.state.password.length > 0) {
      this.handleLoginClick()
      event.preventDefault()
      this.setState({ email: '', password: '' })
    } else {
      this.handleLoginClick()
      event.preventDefault()
    }
  }

  // the logic in the JSX should be put into a function above
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="login-form">
          <input type="email" name="email" value={this.state.email} placeholder="Email" 
          className="email" id="input" onChange={this.handleChange} />
          <input type="password" name="password" value={this.state.password} placeholder="Password"
          className="password" id="input" onChange={this.handleChange} />
          <input type="submit" className="button" id="input" 
          value={this.state.isLoggedIn === false ? "Log in" : "Log out"} />
        </form>
        <p>Status: {this.state.isLoggedIn === false ? "Logged Out" : `${this.state.email} Logged In`}</p>

      </div>
    );
  }
}

export default LoginForm