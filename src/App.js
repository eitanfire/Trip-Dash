import React from "react";
import HomePage from '../src/pages/HomePage';
import { Container, Navbar, NavbarBrand } from "reactstrap";
import logo from "../src/assets/img/trip-dash-logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar className="NavBar" dark color="primary" sticky="top" expand="md">
        <Container>
          <NavbarBrand href="/">
            <img className="logo" src={logo} alt="trip dash logo" />
          </NavbarBrand>
        </Container>
      </Navbar>
      <HomePage />
    </div>
  );
}

export default App;
