import React from "react";
import "../../style/Login.css";
import { Col, Container, Row } from "react-bootstrap";
import volunterLogo from "../../media/logos/Group-1329.png";
import * as firebase from "firebase/app";
import "firebase/app";
import firebaseConfig from "../../firebaseConfig";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        if (result.user) {
          navigate("/");
          alert("Login Successfully");
        }
      })
      .catch((error) => {
        if (error.code === "auth/popup-closed-by-user") {
          alert("Login Proceed Faild ");
        }
      });
  };

  return (
    <div className="loginSection">
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col md="12" className="text-center">
            <img
              src={volunterLogo}
              alt=""
              className="loginVolunterImg w-25 mt-5"
            />
          </Col>
          <Col
            md="6"
            className="d-flex align-items-center justify-content-center mt-5"
          >
            <div className="loginArea text-center">
              <h3>Login With</h3>
              <button
                onClick={handleLogin}
                className="mt-3 d-flex align-items-center justify-content-center"
              >
                <i class="ri-google-fill"></i> <span>Continue with Google</span>
              </button>
              <p className="mt-2">
                Don't have an account?{" "}
                <span onClick={handleLogin}>Create an account</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
