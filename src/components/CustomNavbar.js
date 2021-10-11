import React from "react";
import Container from "react-bootstrap/Container";
import logo from "../assets/Logo1.png";

const CustomNavbar = () => {
  return (
    <Container>
      <a href="./home">
        <img
          alt=""
          src={logo}
          width="50"
          height="50"
          className = "main-log"
        />
      </a>

      <div className="navbar-alignment">
      <a className="navbar-links" href="./Profile">
          <i class="fas fa-user-alt"></i> |
        </a>
      <a className="navbar-links" href="./search">
          <i class="fas fa-search"></i> |
        </a>
        <a className="navbar-links" href="./addcart">
          <i class="fas fa-cart-plus"></i>(0) |
        </a>
      <a className="navbar-links" href="./aboutus">About Us |</a>
        <a className="navbar-links" href="./contactus">Contact Us |</a>
     
        <a className="navbar-links" href="./SignIn">Profile |</a>
        <a className="navbar-links" href="./ShippingPolicy">Shipping Policy |</a>
        <a className="navbar-links" href="./returnpolicy">Return Policy |</a>
        <a className="navbar-links" href="./policies">Privacy Policy |</a>
        
        
        
      </div>
    </Container>
  );
};
export default CustomNavbar;
