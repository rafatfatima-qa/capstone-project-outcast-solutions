import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import logo from "../assets/Logo1.png";
import { useHistory } from "react-router-dom";

const CustomNavbar = () => {

  let history = useHistory();

  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand onClick={() => history.push("/Home")}>
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top main-log"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* {" "} */}
              {/* This is to put space between logo and header links*/}
            </Nav>
            <Nav className="navbar-links">
              <Nav.Link onClick={() => history.push("/OrderList")}>Orders</Nav.Link>
            <NavDropdown 
                title="Shipping & Returns"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="navbar-links" onClick={() => history.push("/ReturnPolicy")}>
                  Return Policy
                </NavDropdown.Item>
                <NavDropdown.Item className="navbar-links" onClick={() => history.push("/ShippingPolicy")}>
                  Shipping Policy
                </NavDropdown.Item>
                <NavDropdown.Item className="navbar-links" onClick={() => history.push("/Policies")}>
                  Privacy Policy
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navbar-links" onClick={() => history.push("/MorePolicies")}>
                  More Policies
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => history.push("/AboutUs")}>About Us</Nav.Link>
              <Nav.Link onClick={() => history.push("/ContactUs")}>Contact Us</Nav.Link>
              <Nav.Link onClick={() => history.push("/SignIn")}>
                <i class="fas fa-user-alt"></i>
              </Nav.Link>
              <Nav.Link onClick={() => history.push("/Search")}>
                <i class="fas fa-search"></i>
              </Nav.Link>
              <Nav.Link onClick={() => history.push("/AddCart")}>
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
