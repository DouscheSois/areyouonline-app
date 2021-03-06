import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const RegisterScreen = () => {
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form>
        <Form.Group controlId="name">
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Control type="password" placeholder="Confirm password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have have an account?
          <Link to="/login"> Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
