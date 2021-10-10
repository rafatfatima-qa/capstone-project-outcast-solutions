import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Policies from "./Policies";
import { ListGroup } from "react-bootstrap";
import cylinder from "../assets/small-cylinder.png";
import Tooltip from "react-bootstrap/Tooltip";
import logo from "../assets/Logo1.png";
import { useHistory } from "react-router-dom";
​
const AddCart = () => {
  let history = useHistory();
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);
  function addItem() {
    alert("Item added to Cart!");
    let totalItems = document.getElementById("cart");
    // Increase count of cart.
    totalItems.textContent = +totalItems.textContent + 1;
  }
  if (show === !true) {
    return (
      <Alert
        variant="danger"
        onClose={() => {
          setShow(true);
          history.push("/PlaceOrder");
        }}
        dismissible
      >
        <Alert.Heading>Item added to cart</Alert.Heading>
        <p>Keep shopping?</p>
      </Alert>
    );
  }
  const dec = () => {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };
​
  return (
    <>
      {/* <Button onClick={() => setShow(!true)}>Show Alert</Button>; */}
      <Container>
        <Row className="mt-5">
          <Col md={2} className="mt-3">
            <h4> Categories </h4>
            <ListGroup variant="flush">
              <ListGroup.Item>Tanks</ListGroup.Item>
              <ListGroup.Item>Stoves</ListGroup.Item>
              <ListGroup.Item>Parts</ListGroup.Item>
              <ListGroup.Item>Fryer</ListGroup.Item>
              <ListGroup.Item>Industrial</ListGroup.Item>
              <ListGroup.Item>Gases</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <img width="350px" src={cylinder} />
          </Col>
          <Col lg={6}>
            <p className=" text-muted">Propane gas</p>
            <h3 className=" display-6">LPG Cylinder (30 lbs)</h3> <hr />
            {/* lis items */}
            <div>
              <ul className="mt-3">
                <li>Pre-purged vacuum ready for filling with LP Gas</li>
                <li>High grade steel welded construction</li>
                <li>Premium OPD valve assembly</li>
                <li>X-ray and hydrostatic tested</li>
                <li>Powder coating for long lasting exterior protection</li>
              </ul>
            </div>
            {/* price */}
            <div>
              <h4 className="d-inline display-6">$60.00 </h4>{" "}
              <sub style={{ fontSize: "20px" }} className="">
                {" "}
                Inclusive of Taxes{" "}
              </sub>
            </div>
            {/* quantity, payment add to cart buttons */}
            <Col md={7}>
              <div className="mt-4 d-flex flex-wrap">
                <Button
                  onClick={() => setCount(count + 1)}
                  className=" mr-2  bg-dark btn-block  text-white "
                  style={{ width: "45px", borderRadius: "30px" }}
                >
                  <i className="fas fa-plus text-center"></i>
                </Button>
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    marginTop: "15px",
                    paddingRight: "12px",
                    paddingLeft: "12px",
                  }}
                >
                  {count}
                </p>
                <Button
                  onClick={dec}
                  style={{
                    marginRight: "12px",
                    width: "45px",
                    borderRadius: "30px",
                  }}
                  className=" mr-2  bg-dark btn-block  text-white "
                >
                  <i className="fas fa-minus text-center"></i>
                </Button>
                <Button
                  className="h-50 btn-block"
                  onClick={() => {
                    setShow(!true);
                  }}
                >
                  Add to Cart <i class="fas fa-cart-plus"></i>
                </Button>
                <Button
                  style={{ minWidth: "120px", marginRight: "12px" }}
                  className="h-50  btn-block bg-dark  text-white "
                >
                  <i class="fab fa-paypal"></i> Paypal
                </Button>
                <Button
                  style={{ minWidth: "120px" }}
                  className="h-50 btn-block  bg-dark  text-white "
                >
                  PCREDIT
                </Button>
              </div>
            </Col>
            <div
              style={{
                borderRadius: "5px",
                height: "auto",
                border: "1px solid #e4e4e4",
                paddingBottom: "1rem",
              }}
              className=" mt-5 mb-5 pl-5 pr-5 "
            >
              <Col lg={12}>
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab
                    style={{ fontSize: "18px" }}
                    eventKey="home"
                    title="Description"
                  >
                    <Policies />
                  </Tab>
                  <Tab
                    style={{ fontSize: "18px" }}
                    eventKey="profile"
                    title="Reviews"
                  >
                    <Policies />
                  </Tab>
                </Tabs>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AddCart;