import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import RegisterScreen from "./screens/RegisterScreen";

const App = () => {
  return (
    <Router>
      <main>
        <Container>
          <Route path="/register" component={RegisterScreen} />
        </Container>
      </main>
    </Router>
  );
};

export default App;
