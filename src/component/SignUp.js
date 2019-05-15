import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  text-align: center;
  h1 {
    padding-top: 30px;
  }
  .title {
    padding-bottom: 30px;
  }
  input {
    display: block;
    padding: 15px 20px;
    margin: 10px auto;
    width: 400px;
  }
  button {
    padding: 15px 30px;
    margin-top: 30px;
    border: 0;
    background: #4285f4;
    color: white;
    text-transform: uppercase;
  }
  .error-text {
    color: red;
    text-align: left;
    padding-bottom: 15px;
  }
  .error {
    border: 1px solid red;
  }
  form {
    width: 400px;
    margin: 0 auto;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach( val => { val.length > 0 && (valid = false) });

  return valid;
}

const emailReg = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',

      formErrors: {
        username: '',
        email: '',
        password: ''
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    console.log('name:', name);
    console.log('value: ', value);
    

    switch (name) {
      case 'username':
        formErrors.username = value.length < 10 && value.length > 0 
          ? 'Minimum 10 characters required'
          : '';
        break;
      case 'email':
        formErrors.email = emailReg.test(value) && value.length > 0 
          ? ''
          : 'Email address invalid';
        break;
      case 'password':
        formErrors.password = value.length < 10 && value.length > 0 
          ? 'Minimum 10 characters required'
          : '';
        break;
    }
    this.setState({formErrors, [name]: value}, () => {console.log(formErrors)});
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`
        ---SUBMITTING----
        Username: ${this.state.username}
        Email: ${this.state.email}
        Password: ${this.state.password}
    `)
    } else {
      console.error('Form invalid - display error message');
    }
  }
  render () {
    const formErrors = this.state.formErrors;
    return (
      <Wrapper>
        <h1>Sign Up</h1>
        <p className="title"><StyledLink to="/sign-in">Have an account?</StyledLink></p>
        <form>
          <input 
            type="text" 
            name="username" 
            value={this.state.username} 
            required 
            placeholder="Username"
            onChange={this.handleChange}
            className={ formErrors.username.length > 0 ? 'error': '' }

          />
          {formErrors.username.length > 0 && (
            <p className="error-text"><small>{formErrors.username}</small></p>
          )}
          <input 
            type="email" 
            name="email" 
            value={this.state.email} 
            required 
            placeholder="Email"
            onChange={this.handleChange}
            className={ formErrors.email.length > 0 ? 'error': '' }
          />
          {formErrors.email.length > 0 && (
            <p className="error-text"><small>{formErrors.email}</small></p>
          )}
          <input 
            type="password" 
            name="password" 
            value={this.state.password} 
            required 
            placeholder="Password"
            onChange={this.handleChange}
            className={ formErrors.password.length > 0 ? 'error': '' }
          />
          {formErrors.password.length > 0 && (
            <p className="error-text"><small>{formErrors.password}</small></p>
          )}
          <button 
            type="submit" 
            onClick={this.handleSubmit}
          >
            Sign up
          </button>
        </form>
      </Wrapper>
    );
  }
}

export default SignUp;