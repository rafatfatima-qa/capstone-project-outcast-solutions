import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import logo from "../assets/Logo1.png";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {" "}
              {/* This is to put space between logo and header links*/}
            </Nav>
            <Nav>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="./OrdersList"> Orders </Nav.Link>
              {/* <Nav.Link href="/orderList">Orders</Nav.Link> */}
              {/* <Nav.Link href="#pricing">Shipping & Returns</Nav.Link> */}
              <NavDropdown
                title="Shipping & Returns"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/returnPolicy">
                  Return Policy
                </NavDropdown.Item>
                <NavDropdown.Item href="/shippingPolicy">
                  Shipping Policy
                </NavDropdown.Item>
                <NavDropdown.Item href="/policies">
                  Privacy Policy
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/morepolicies">
                  More Policies
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <Nav.Link as={Link} to="./ContactUs"> Contact Us </Nav.Link>
              {/* <Nav.Link href="/contactus">Contact Us</Nav.Link> */}
              <Nav.Link href="/signIn">
                <i class="fas fa-user-alt"></i>
              </Nav.Link>
              <Nav.Link href="search">
                <i class="fas fa-search"></i>
              </Nav.Link>
              <Nav.Link href="/addCart">
                <i class="fas fa-cart-plus"></i>(0)
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default CustomNavbar;
