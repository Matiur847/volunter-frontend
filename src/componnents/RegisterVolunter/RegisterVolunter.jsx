import React, { useEffect, useState } from "react";
import "../../style/RegisterVolunter.css";
import volunterLogo from "../../media/logos/Group-1329.png";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import allData from "../../allData";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const RegisterVolunter = () => {
  const [currentVolunter, setCurrentVolunter] = useState([]);
  const { id } = useParams();

  // Get current user
  const [currentUser, setCurrentUser] = useState([]);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, [auth]);

  useEffect(() => {
    const filterVolunter = allData.filter((item) => item._id === id);
    setCurrentVolunter(filterVolunter);
  }, [id]);

  const handleVolunterRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="loginSection ">
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
            <div className="loginArea registerVolunter mb-5">
              <h3 className="flex-end">Register as a volunteer</h3>
              <form onSubmit={handleVolunterRegister}>
                <div className="volunterInput">
                  <input
                    type="name"
                    placeholder="Full Name"
                    value={currentUser?.displayName}
                  />{" "}
                  <br />
                  <input
                    type="email"
                    placeholder="Username or Email"
                    value={currentUser?.email}
                  />{" "}
                  <br />
                  <input type="date" placeholder="Date" required /> <br />
                  <input type="description" placeholder="Description" required/> <br />
                  <input
                    type="books"
                    placeholder="Organize books at the library."
                    required
                  />{" "}
                  <br />
                  <input className="volunterSubmitBtn" type="submit" value="Registration" />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterVolunter;
