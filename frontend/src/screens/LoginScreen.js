import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const LoginScreen = () => {
  return (
    <FormContainer>
      <h1>Welcome Back!</h1>
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Need have an account?
          <Link to="/register"> Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
