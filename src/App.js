// @flow

import React from 'react';
import { Container, Navbar, NavItem } from 'react-materialize';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import Departments from './components/Departments/Departments';
import Employees from './components/Employees/Employees';

const Router = BrowserRouter;

const App = () => (
  <Router>
    <div className="App">
      <Container>
        <Navbar className="teal lighten-2" left>
          <Link to="/Departments">
            <NavItem>Departments</NavItem>
          </Link>
          <Link to="/Employees">
            <NavItem>Employees</NavItem>
          </Link>
        </Navbar>
        <h3>Welcome to Departments App</h3>
        <Route exact path="/Departments" component={Departments} />
        <Route path="/Employees" component={Employees} />
      </Container>
    </div>
  </Router>
);

export default App;
