import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home">Coche</Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/services">
              Services
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
