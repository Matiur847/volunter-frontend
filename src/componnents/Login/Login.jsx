import React from "react";
import '../../style/Login.css'
import { Col, Container, Row } from "react-bootstrap";
import volunterLogo from "../../media/logos/Group-1329.png";

const Login = () => {
  return (
    <div className="loginSection">
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col md="12" className="text-center">
            <img src={volunterLogo} alt="" className="loginVolunterImg w-25 mt-5" />
          </Col>
          <Col md='6' className="d-flex align-items-center justify-content-center mt-5">
            <div className="loginArea text-center">
              <h3>Login With</h3>
              <button className="mt-3 d-flex align-items-center justify-content-center"><i class="ri-google-fill"></i> <span>Continue with Google</span></button>
              <p className="mt-2">Don't have an account? <span>Create an account</span></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
