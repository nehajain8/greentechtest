import React , { Component } from 'react';
import "./app.scss";

class Login extends Component {
  state = {
      email: '',
      isDevice: false,
      errors: {
        email: '',
      }
    };
    
 validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }
  handleInputChange = (event) => {
    const validEmailRegex = /(.+)@(.+){2,}\.(.+){2,}/;
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let errors = this.state.errors;
    if (name === "email")
        errors.email = validEmailRegex.test(value)  ? ''  : 'Email is not valid!';
    this.setState({errors, [name]: value}, ()=> {
        console.log(errors)
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if(this.validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }
  render() {
    const {errors} = this.state;
    console.log("errors", errors.email.length);
    return(
        <form onSubmit={this.handleSubmit}>
            <label>
            Email Address:
            <input 
                type="text" 
                name="email"
                value={this.state.value} 
                onChange={this.handleInputChange} />
                {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </label>
            <label>
                <input
                name="isDevice"
                type="checkbox"
                checked={this.state.isDevice}
                onChange={this.handleInputChange} />
                Remember this device
            </label>
            <button type="submit" disabled={this.state.email === '' || errors.email.length > 0}>
            Sign In
            </button>
        </form>
    )
  }
}

export default Login;
