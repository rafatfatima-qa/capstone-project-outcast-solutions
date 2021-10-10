import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Profile from "./Profile";
import Usericon from "../assets/user-icon.png";
import UiImg3 from "../assets//ui-img3.png";
import UiImg2 from "../assets/ui-img2.png";
const SignIn = () => {
  let history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (event) => {
      setEmail(event.target.value);
    }
  
    const onChangePassword = (event) => {
      setPassword(event.target.value);
    }

  const handleClick = () => {
      console.log(email, password);
      if (email == "" || password == "") {
        alert('please enter valid email and password')
      }
      else {
         window.localStorage.setItem(email,password);
         history.push('/home')
      }
  }

  const joinWithGoogle = () => {
    window.open("https://www.google.com", "_blank");
  }

  return (
    <>
      <div className="maincontainer m-5 p-5">
        <div class="container-fluid">
          <div class="row no-gutter">
            <div class="col-md-6 d-none d-md-flex bg-image"></div>

            <div class="col-md-6 bg-light">
              <div class="login d-flex align-items-center py-5">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-10 col-xl-7 mx-auto">
                      <h3 style={{ color: "#3C3B6E" }} class="display-4">
                        Login
                      </h3>
                      <p class="text-muted mb-4">
                        Please fill the login information
                      </p>
                      <form>
                        <Form.Floating className="mb-3 ">
                          <Form.Control
                            className=" form "
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                            onChange={onChangeEmail}
                          />

                          <label htmlFor="floatingInputCustom">
                            Email address
                          </label>
                        </Form.Floating>
                        <Form.Floating>
                          <Form.Control
                            className="mb-3 form"
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="Password"
                            onChange={onChangePassword}
                          />
                          <label htmlFor="floatingInputCustom">Password</label>
                          <a className = "forgot-pwd" href="/ForgotPassword">Forgot Password?</a>
                        </Form.Floating>
                        <div className="custom-control custom-checkbox ml-3 mb-3">
                          <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                          </Form.Group>
                        </div>
                        <Button
                          style={{ width: "100%" }}
                          type="submit"
                          onClick={handleClick}
                          className=" btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Sign in
                        </Button>
                      </form>
                      <div className="custom-control custom-checkbox ml-3 mb-3">
                      <Button
                          style={{ width: "100%" }}
                          type="submit"
                          onClick={joinWithGoogle}
                          className=" btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                        <i class="fab fa-google payment-methods-footer"></i> Join with Google
                        </Button>
                        <Nav.Link href="/SignUp"><i>Dont have an accoutn yet? Sign Up here</i></Nav.Link>
                        </div> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;