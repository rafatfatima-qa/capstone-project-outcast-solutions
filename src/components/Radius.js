import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import AddCart from "./AddCart";
import { useHistory } from "react-router-dom";

const Radius = () => {
    let history = useHistory();
  return (
    <Container>
    <h3 style={{ color: "#3C3B6E" }} class="display-4">Propane Cylinder Delivery Options</h3>
    <br />
      <AddCart />

      <div className="custom-control custom-checkbox ml-3 mb-3">
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Delivery Date No. 1" />
          <Form.Check type="checkbox" label="Delivery Date No. 2" />
          <Form.Check type="checkbox" label="Delivery Date No. 3" />
        </Form.Group>
      </div>
      <Button
        style={{ width: "20%" }}
        type="submit"
        onClick={() => history.push("/SignUp")}
        className=" btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
      >
        Signup & Place Order
      </Button>

    </Container>
  );
};
export default Radius;