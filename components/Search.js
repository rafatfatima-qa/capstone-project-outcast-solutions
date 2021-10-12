import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useHistory } from "react-router-dom";

const Search = () => {
  let history = useHistory();
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="8">
          <FloatingLabel
            controlId="floatingInput"
            label="Search"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="search" />
          </FloatingLabel>
          <Form.Group className="mb-3">
            <Col>
              <Button type="submit" onClick={() => history.push("/Categories")}>
                <i class="fas fa-search"></i>
              </Button>
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};
export default Search;
