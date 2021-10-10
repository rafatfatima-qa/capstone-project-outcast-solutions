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

const ForgotPassword = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = () => {
    console.log(email);
    if (email == "") {
      alert("please enter valid email and password");
    } else {
      window.localStorage.setItem(email);
      history.push("/home");
    }
  };

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
                      <h5 style={{ color: "#3C3B6E" }} class="display-6">
                        Forgot Password
                      </h5>
                      <p class="text-muted mb-4">
                        Please enter your email address
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
                        <Button
                          style={{ width: "100%" }}
                          type="submit"
                          onClick={handleClick}
                          className=" btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Reset
                        </Button>

                        <Button
                          style={{ width: "100%" }}
                          type="submit"
                          onClick={handleClick}
                          className=" btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Sign in
                        </Button>
                      </form>
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
export default ForgotPassword;
