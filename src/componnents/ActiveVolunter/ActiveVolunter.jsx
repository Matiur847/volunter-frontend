import React, { useEffect, useState } from "react";
import "../../style/ActiveVolunter.css";
import Header from "../Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ActiveVolunterCard from "./ActiveVolunterCard";

const ActiveVolunter = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const [activeVolunter, setActiveVolunter] = useState();

  // console.log(activeVolunter)

  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, [auth]);

  console.log("currentUser", activeVolunter);

  useEffect(() => {
    const filterVolunter = activeVolunter?.activeVolunter.filter(
      (volunter) => volunter.email === currentUser?.email
    );
  }, [activeVolunter?.activeVolunter, currentUser?.email]);

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
    <div className="activeVolunterSection">
      <Header currentUser={currentUser} />
      <Container>
        <Row>
          {
            activeVolunter?.activeVolunter.map((item) => (
              <Col lg="6" md="6" sm="6" xs="12">
                <ActiveVolunterCard item={item} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  );
};

export default ActiveVolunter;
