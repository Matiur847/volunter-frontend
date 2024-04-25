import React, { useEffect, useState } from "react";
import "../../style/ActiveVolunter.css";
import Header from "../Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ActiveVolunter = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const [activeVolunter, setActiveVolunter] = useState();

  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, [auth]);

  console.log("currentUser", activeVolunter);

  useEffect(() => {
    axios
      .get("http://localhost:4242/api/v1/activeVolunter")
      .then((res) => {
        setActiveVolunter(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Container>
        <Row>
          <Col md="6">hello world</Col>
        </Row>
      </Container>
    </div>
  );
};

export default ActiveVolunter;
