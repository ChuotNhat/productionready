import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Home from './component/Home';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';

import './App.css';

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const ContainerFluid = styled.div`
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 20px;
  background: #4285f4;
  left: 0;
  right: 0;
  color: white;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h3`
  font-size: 20px;
`;

const NavRight = styled.ul`
  list-style-type: none;
  li {
    display: inline-block;
    padding: 20px;
    text-decoration: none;
  }
`;

function App() {
  return (
    <ContainerFluid>
      <Router>
        <Container>
          <Nav>
            <Logo>Conduit</Logo>
            <NavRight>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/sign-in">Sign In</StyledLink>
              </li>
              <li>
                <StyledLink to="/sign-up">Sign Up</StyledLink>
              </li>
            </NavRight>
          </Nav>
        </Container>

        <ContainerFluid>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </ContainerFluid>

        <Footer>
          <Container>
            <p>Conduit @Copyright by Huong Tran</p>
          </Container>
        </Footer>
      </Router>
    </ContainerFluid>
  );
}

export default App;


