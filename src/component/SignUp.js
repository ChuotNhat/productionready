import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

function SignUp() {
  return (
    <Wrapper>
      <h1>Sign Up</h1>
      <p><StyledLink to="/sign-in">Have an account?</StyledLink></p>
      <form>
        <input type="text" name="username" required placeholder="Username"/>
        <input type="email" name="email" required placeholder="Email"/>
        <input type="password" name="password" required placeholder="Password"/>
        <button type="submit">Sign up</button>
      </form>
    </Wrapper>
  );
}

export default SignUp;