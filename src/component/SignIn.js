import React, { Component } from "react";
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const Wrapper = styled.div`
  text-align: center;
  h1 {
    padding-top: 30px;
  }
  p {
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
    border: 0;
    background: #4285f4;
    color: white;
    text-transform: uppercase;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  }
};

class SignIn extends Component {

  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });

  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from}  />;

    return (
      <Wrapper>
        <h1>Sign In</h1>
        <p><StyledLink to="/sign-up">Need an account?</StyledLink></p>
        <form>
          <input type="text" name="name" required placeholder="Email"/>
          <input type="password" name="password" required placeholder="Password"/>
          <button type="button" onClick={this.login}>Sign in</button>
        </form>
      </Wrapper>
    );
  }
}

export default SignIn;