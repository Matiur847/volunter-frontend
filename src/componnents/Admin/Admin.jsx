import React from "react";
import "../../style/Admin.css";
import Header from "../Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import AddEvent from "../AddVolunter/AddEvent";

const Admin = () => {
  return (
    <div>
      <Header />
      <div className="adminSection">
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Col md="6">
              <AddEvent />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Admin;
