import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            © 2021 - A douschesois creation
            <div className="footnote-links">
              <a href="https://www.douschesois.com/">Website</a>
              <a href="https://www.linkedin.com/in/roger-alexander-37925619a/">
                Linkedin
              </a>
              <a href="https://github.com/DouscheSois">Github</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
