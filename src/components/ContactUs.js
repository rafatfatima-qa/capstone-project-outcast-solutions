import { Map, GoogleApiWrapper } from "google-maps-react";
import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useHistory } from "react-router-dom";
import MapSection from "../components/map/Map"; // import the map here

const location = {
  address: "1005 N.W. 119th Street, North Miami, FL",
  lat: 25.884572674780078,
  lng: -80.21524240740798,
}; // our location object from earlier

const ContactUs = () => {
  let history = useHistory();

  return (
    <>
      <Container>
        <Card>
          <Card.Body>
            <MapSection location={location} zoomLevel={17} />{" "}
            {/* include it here */}
            <Card.Text>
              <p className="aboutus-page-text mb-4">
                <h3 style={{ color: "#3C3B6E" }} class="display-4">
                  Our Address
                </h3>
                <hr />
                1005 N.W. 119th Street, North Miami, FL 33168 Support:
                (+1)786-290-3000 Email: care@247propane.com
                <h3 style={{ color: "#3C3B6E" }} class="display-4">
                  Open Hours
                </h3>
                <hr />
                We are always open!
              </p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Form>
          <Row className="justify-content-md-center">
            <Col xs lg="8">
              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="name" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>

              <Button
                style={{ width: "20%" }}
                type="submit"
                className=" btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                onClick={() => history.push("/Home")}
              >
                Send Message
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
export default ContactUs;
