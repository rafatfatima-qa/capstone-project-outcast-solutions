import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import worldMap from "../assets/world-map.png";
import googleBtn from "../assets/google-btn.png";
import appleBtn from "../assets/apple-btn.png";
import cylinder from "../assets/small-cylinder.png";
import home from "../assets/home-image.svg";
import { useHistory } from "react-router-dom";
import Categories from "./Categories";

const Home = () => {
  let history = useHistory();
  return (
    <>
      <Container>
        {/* First HomePage Section*/}
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>
                <p className="home-page-heading">
                  {" "}
                  Not So Fast,
                  <br />
                  Natural <span className="home-page-heading-span">
                    Gas
                  </span>{" "}
                </p>
              </Card.Title>
              <Card.Text>
                <p className="home-page-text">
                  Our products comprise industrial gases
                  <br />
                  for commercial and consumer use
                </p>
                <a
                  className="download-btn"
                  href="https://play.google.com/store/apps"
                  target="_blank"
                >
                  <img width="130px" src={googleBtn}></img>
                </a>
                <a
                  className="download-btn"
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                >
                  <img width="156px" src={appleBtn}></img>
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              // class="header-img"
              variant="top"
              src={home}
              roundedCircle
            />
          </Card>
        </CardGroup>
        {/* Second HomePage Section: */}
        <Container className="second-section">
          <h1 class="text-center second-section-heading">
            {" "}
            Why Choose <span className="home-page-heading-span">Us</span>?
          </h1>
          <CardGroup>
            <Card className="cards mb-5">
              <Card.Body class="m-5">
                <i class="second-sec-icons fas fa-hand-holding-usd"></i>
                <Card.Title>
                  <p className="text-center mt-4">
                    {" "}
                    Best quality with Affordable Price
                  </p>
                </Card.Title>
                <Card.Text class="text-left">
                  We provide you a best services in US at very affordable price
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cards mb-5">
              <Card.Body class="m-5">
                <i class="second-sec-icons fas fa-people-carry"></i>
                <Card.Title>
                  <p className="text-center mt-4">
                    {" "}
                    Reliable & perfect for commercial
                  </p>
                </Card.Title>
                <Card.Text>
                  We provide you a best services in US at very affordable price
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cards mb-5">
              <Card.Body class="m-5">
                <i class="second-sec-icons fas fa-globe-americas"></i>
                <Card.Title>
                  <p className="text-center mt-4"> Location Around The World</p>
                </Card.Title>
                <Card.Text>
                  We provide you a best services in US at very affordable price
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
        {/* Third HomePage Section: Featured Products*/}
        <div className="section-heading">
          <h1>
            {" "}
            Featured <span className="home-page-heading-span">Products</span>
          </h1>
        </div>
        <Categories />
      </Container>
      {/* Fourth HomePage Section: Contact Us*/}
      <CardGroup>
        <Card className=" fourth ">
          <Card.Body>
            <Card.Text>
              <p className="home-page-section-text">
                Learn about the types of home{" "}
                <span className="home-page-heading-span">propane</span> tanks
                you can install on
              </p>
            </Card.Text>
            <Button className="btn" onClick={() => history.push("/contactus")}>
              Contact Us <i class="fas fa-long-arrow-alt-right"></i>
            </Button>
          </Card.Body>
        </Card>

        <Card className=" fourth ">
          <Card.Body>
            <Card.Img
              className=" fourth-sec-img"
              variant="top"
              src={cylinder}
              roundedCircle
            />
          </Card.Body>
        </Card>
      </CardGroup>

      {/* Fifth HomePage Section*: ZipCode Section*/}
      <Card className="radius-section">
        <Card.Body className="zip">
          <Card.Text>
            <p className="home-page-section-text">
              Are you inside our radius?
              <br />
              Enter your{" "}
              <span className="home-page-section-span">Zip Code</span> to
              Find...
            </p>
          </Card.Text>
          <input
            className="col-xs-3 input-zipcode"
            type="text"
            id="zipcode"
            placeholder="Zip Code"
          />
          <Button className="btn-go" onClick={() => history.push("/Radius")}>
            Go <i class="fas fa-long-arrow-alt-right"></i>
          </Button>
        </Card.Body>
        <Card.Img
          className="fifth-img"
          variant="top"
          src={worldMap}
          roundedCircle
        />
      </Card>
    </>
  );
};
export default Home;
