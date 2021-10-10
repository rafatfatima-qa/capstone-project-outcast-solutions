import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Profile = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="8">
          <FloatingLabel
            controlId="floatingInput"
            label="Username"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="username" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Phone"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="(xxx) xxx-xxxx" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Address"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="1234 Main St" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="New Password"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="New Password" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="Confirm Password"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Confirm Password" />
          </FloatingLabel>

          <Form.Group className="mb-3">
            <Col>
              <Button type="submit">Save Changes</Button>
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;
