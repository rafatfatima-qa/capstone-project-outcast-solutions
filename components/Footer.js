import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import logo from "../assets/Logo1.png";
import { useHistory } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <CardGroup className="mb-0">
        {/* Column 1*/}
        <Card className="footer mb-0">
          <div className="footer-column-heading">
            <Card.Img
              variant="top"
              className="footer-logo  bg-white "
              src={logo}
              roundedCircle
            />
          </div>
        </Card>

        {/* Column 2*/}
        <Card className="footer mb-0">
          <Card.Body>
            <div className="footer-column-heading">
              <Card.Title>Categories</Card.Title>

              <Card.Text>
                <ul className="list-unstyled">
                  <li>
                    <a href="/Categories" target="_blank">
                      Burners
                    </a>
                  </li>
                  <li>
                    <a href="/Categories" target="_blank">
                      Tanks
                    </a>
                  </li>
                  <li>
                    <a href="/Categories" target="_blank">
                      Burners
                    </a>
                  </li>
                  <li>
                    <a href="/Categories" target="_blank">
                      Tanks
                    </a>
                  </li>
                  <li>
                    <a href="/Categories" target="_blank">
                      Burners
                    </a>
                  </li>
                  <li>
                    <a href="/Categories" target="_blank">
                      Tanks
                    </a>
                  </li>
                </ul>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>

        {/* Column 3*/}
        <Card className="footer mb-0">
          <Card.Body>
            <div className="footer-column-heading">
              <Card.Title>Quick Links</Card.Title>

              <Card.Text>
                <ul className="list-unstyled">
                  <li>
                    <a href="/AboutUs" target="_blank">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/Policies" target="_blank">
                      Shipping & Returns
                    </a>
                  </li>
                  <li>
                    <a href="/Policies" target="_blank">
                      Privacy & Policies
                    </a>
                  </li>
                  <li>
                    <a href="/ContactUs" target="_blank">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>

        {/* Column 4*/}
        <Card className="footer mb-0">
          <Card.Body>
            <div className="footer-column-heading">
              <Card.Title>Address</Card.Title>

              <Card.Text>
                Got Questions? Call us 24/7! : +1786-290-3000 Visit us anytime!
                1005 N.W. 119th Street, North Miami, FL 33168
                <div>
                  <i class="fab social-media-footer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37.865"
                      height="37.865"
                      viewBox="0 0 37.865 37.865"
                    >
                      <rect
                        id="Rectangle_61"
                        data-name="Rectangle 61"
                        width="36.365"
                        height="36.365"
                        rx="18.182"
                        transform="translate(0.75 0.75)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="1.5"
                        opacity="0.25"
                      />
                      <path
                        id="Path_53"
                        data-name="Path 53"
                        d="M17.173,26.214V18.931H15.667v-2.51h1.506V14.915c0-2.047.85-3.265,3.266-3.265h2.011v2.51H21.192c-.94,0-1,.351-1,1.005l0,1.256h2.277l-.267,2.51h-2.01v7.283Z"
                        transform="translate(-0.133)"
                        fill="#fff"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </i>{" "}
                  <i class="fab social-media-footer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37.865"
                      height="37.865"
                      //viewBox="0 0 37.865 37.865"
                    >
                      <rect
                        id="Rectangle_60"
                        data-name="Rectangle 60"
                        width="36.365"
                        height="36.365"
                        rx="18.182"
                        transform="translate(0.75 0.75)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="1.5"
                        opacity="0.25"
                      />
                      <path
                        id="Path_50"
                        data-name="Path 50"
                        d="M16.124,25.243H13.211V16.5h2.913Z"
                        transform="translate(-1.59)"
                        fill="#fff"
                        fill-rule="evenodd"
                      />
                      <path
                        id="Path_51"
                        data-name="Path 51"
                        d="M14.659,14.563h-.017a1.473,1.473,0,1,1,.017,0Z"
                        transform="translate(-1.59)"
                        fill="#fff"
                        fill-rule="evenodd"
                      />
                      <path
                        id="Path_52"
                        data-name="Path 52"
                        d="M26.8,25.243H23.942V20.675c0-1.147-.414-1.93-1.45-1.93a1.565,1.565,0,0,0-1.469,1.038,1.929,1.929,0,0,0-.094.692v4.768H18.066s.038-7.736,0-8.537h2.863v1.209a2.845,2.845,0,0,1,2.58-1.41c1.883,0,3.3,1.22,3.3,3.843Z"
                        transform="translate(-1.59)"
                        fill="#fff"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </i>{" "}
                  <i class="fab  social-media-footer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37.865"
                      height="37.865"
                      viewBox="0 0 37.865 37.865"
                    >
                      <g
                        id="Group_15"
                        data-name="Group 15"
                        transform="translate(0.75 0.75)"
                      >
                        <rect
                          id="Rectangle_60"
                          data-name="Rectangle 60"
                          width="36.365"
                          height="36.365"
                          rx="18.182"
                          fill="none"
                          stroke="#fff"
                          stroke-width="1.5"
                          opacity="0.25"
                        />
                      </g>
                      <g
                        id="Group_14"
                        data-name="Group 14"
                        transform="translate(11.75 11.75)"
                      >
                        <path
                          id="Path_54"
                          data-name="Path 54"
                          d="M9.868,3.942a.78.78,0,1,0-.78-.78A.78.78,0,0,0,9.868,3.942Z"
                          transform="translate(1.443 0.227)"
                          fill="#fff"
                        />
                        <path
                          id="Path_55"
                          data-name="Path 55"
                          d="M3.25,6.5A3.25,3.25,0,1,0,6.5,3.25,3.253,3.253,0,0,0,3.25,6.5Zm1.625,0A1.625,1.625,0,1,1,6.5,8.125,1.627,1.627,0,0,1,4.875,6.5Z"
                          transform="translate(0.908 0.546)"
                          fill="#fff"
                          fill-rule="evenodd"
                        />
                        <path
                          id="Path_56"
                          data-name="Path 56"
                          d="M3.7,14.092h7.408a3.811,3.811,0,0,0,3.7-3.523V3.523A3.811,3.811,0,0,0,11.113,0H3.7A3.811,3.811,0,0,0,0,3.523v7.046A3.811,3.811,0,0,0,3.7,14.092ZM1.852,3.523A2.048,2.048,0,0,1,3.7,1.762h7.408a2.048,2.048,0,0,1,1.852,1.762v7.046a2.048,2.048,0,0,1-1.852,1.762H3.7a2.018,2.018,0,0,1-1.852-1.762Z"
                          fill="#fff"
                          fill-rule="evenodd"
                        />
                      </g>
                    </svg>
                  </i>
                </div>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </CardGroup>

      <hr style={{ display: "table-footer-group" }} />
      <CardGroup className="mb-0">
        {/* Last row, column 1*/}

        <Card className="footer mb-0">
          <Card.Body>
            <Card.Text>
              <p>
                All Rights Reserved © 24/7 Propane | Developed and Managed by
                Outcast Solutions
              </p>
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Last row, column 2*/}
        <Card className="footer mb-0">
          <Card.Body>
            <Card.Text>
              <div className="payment-methods-align-right">
                <a href="https://www.paypal.com">
                  <i class="fab fa-cc-paypal payment-methods-footer"></i>
                </a>{" "}
                <a href="https://www.paypal.com">
                  <i class="fab fa-cc-visa payment-methods-footer"></i>
                </a>{" "}
                <a href="https://www.discover.com">
                  <i class="fab fa-cc-discover payment-methods-footer"></i>
                </a>{" "}
                <a href="https://www.mastercard.com">
                  <i class="fab fa-cc-mastercard payment-methods-footer"></i>
                </a>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};
export default Footer;
